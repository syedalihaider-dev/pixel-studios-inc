import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();

    const name = data.name || data.n || 'not fill by user';
    const email = data.email || data.e || 'not fill by user';
    const phone = data.phone || data.p || 'not fill by user';
    const msg = data.msg || data.m || data.description || 'not fill by user';
    const service = data.service || data.s || 'not fill by user';
    const pkg = data.package || data.pa || 'not fill by user';
    const interest = data.interest || data.i || 'not fill by user';
    const ftype = data.ftype || data.Form_name || 'LP Form Submit';
    const ip = data.ip2loc_ip || 'not fill by user';
    const cn = data.ip2loc_country || 'not fill by user';
    const re = data.ip2loc_region || 'not fill by user';
    const ci = data.ip2loc_city || 'not fill by user';
    const url = data.pageurl || 'not fill by user';
    const Form_name = data.Form_name || data.ftype || 'not fill by user';

    // SMTP Credentials (can be configured via Env Variables, or defaults)
    const smtpHost = process.env.LP_SMTP_HOST || 'host.stagingtestserver.com';
    const smtpPort = parseInt(process.env.LP_SMTP_PORT || '465', 10);
    const smtpUser = process.env.LP_SMTP_USER || 'no-reply@pixelstudiosinc.com';
    const smtpPass = process.env.LP_SMTP_PASS || 'iT0;&QARomPKezZ48C';

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Construct HTML Email Content
    let htmlContent = '';
    htmlContent += `<p><strong>Name:</strong> ${name}</p>`;
    htmlContent += `<p><strong>Email:</strong> ${email}</p>`;
    htmlContent += `<p><strong>Phone:</strong> ${phone}</p>`;
    htmlContent += `<p><strong>Message:</strong> ${msg}</p>`;
    if (service !== 'not fill by user') htmlContent += `<p><strong>Service:</strong> ${service}</p>`;
    if (pkg !== 'not fill by user') htmlContent += `<p><strong>Package:</strong> ${pkg}</p>`;
    if (interest !== 'not fill by user') htmlContent += `<p><strong>Interest:</strong> ${interest}</p>`;

    const mappedKeys = [
      'name', 'email', 'phone', 'msg', 'service', 'package', 'interest', 'ftype',
      'ip2loc_ip', 'ip2loc_country', 'ip2loc_region', 'ip2loc_city', 'pageurl', 'Form_name',
      'n', 'e', 'p', 'm', 's', 'pa', 'i',
      'first_landing_url', 'lead_source', 'utm_source', 'utm_medium', 'utm_campaign', 'gclid', 'original_referrer', 'form_submission_url'
    ];
    for (const [key, value] of Object.entries(data)) {
      if (!mappedKeys.includes(key) && value) {
        htmlContent += `<p><strong>${key}:</strong> ${value}</p>`;
      }
    }

    htmlContent += `<hr />`;
    htmlContent += `<p><strong>IpAddress:</strong> ${ip}</p>`;
    htmlContent += `<p><strong>Country:</strong> ${cn}</p>`;
    htmlContent += `<p><strong>State:</strong> ${re}</p>`;
    htmlContent += `<p><strong>City:</strong> ${ci}</p>`;
    htmlContent += `<p><strong>Url:</strong> ${url}</p>`;
    htmlContent += `<p><strong>Form Name:</strong> ${Form_name}</p>`;

    // Recipients list for the LP
    const recipients = [
      'zain@iceanimations.com',
      'ppc@iceanimations.com',
      'aleehaiderbalti@gmail.com',
    ];

    await transporter.sendMail({
      from: `"Pixel Studios Inc | LP Lead" <${smtpUser}>`,
      to: recipients.join(', '),
      subject: `New Website Lead (LP) - ${Form_name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('LP SMTP Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
