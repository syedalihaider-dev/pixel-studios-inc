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
    const ftype = data.ftype || data.Form_name || 'Form fill buy user verified';
    const ip = data.ip2loc_ip || 'not fill by user';
    const cn = data.ip2loc_country || 'not fill by user';
    const re = data.ip2loc_region || 'not fill by user';
    const ci = data.ip2loc_city || 'not fill by user';
    const url = data.pageurl || 'not fill by user';
    const Form_name = data.Form_name || data.ftype || 'not fill by user';

    // Construct SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: 'host.stagingtestserver.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'no-reply@pixelstudiosinc.com',
        pass: 'iT0;&QARomPKezZ48C',
      },
    });

    // Construct HTML Email Content
    let htmlContent = '';
    htmlContent += `<p><strong>Name:</strong> ${name}</p>`;
    htmlContent += `<p><strong>Email:</strong> ${email}</p>`;
    htmlContent += `<p><strong>Phone:</strong> ${phone}</p>`;
    htmlContent += `<p><strong>Message:</strong> ${msg}</p>`;
    htmlContent += `<p><strong>IpAddress:</strong> ${ip}</p>`;
    htmlContent += `<p><strong>Country:</strong> ${cn}</p>`;
    htmlContent += `<p><strong>State:</strong> ${re}</p>`;
    htmlContent += `<p><strong>City:</strong> ${ci}</p>`;
    htmlContent += `<p><strong>Url:</strong> ${url}</p>`;
    htmlContent += `<p><strong>Form Name:</strong> ${Form_name}</p>`;
    if (service !== 'not fill by user') htmlContent += `<p><strong>Service:</strong> ${service}</p>`;
    if (pkg !== 'not fill by user') htmlContent += `<p><strong>Package:</strong> ${pkg}</p>`;
    if (interest !== 'not fill by user') htmlContent += `<p><strong>Interest:</strong> ${interest}</p>`;
    if (ftype !== 'Form fill buy user verified') htmlContent += `<p><strong>Form Type:</strong> ${ftype}</p>`;

    // Recipients list
    const recipients = [
      // 'zain@iceanimations.com',
      // 'ppc@iceanimations.com',
      // 'ppc.cd@letusproceed.com',
      'ali.haider@canvasdigital.net'
    ];

    // Send Mail
    await transporter.sendMail({
      from: '"Pixel Studios Inc | Website Lead" <leads@pixelstudiosincleads.xyz>',
      to: recipients.join(', '),
      subject: `New Website Lead - ${Form_name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
