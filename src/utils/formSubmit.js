export const getGeoInfo = async () => {
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (res.ok) {
      const data = await res.json();
      return {
        ip: data.ip || 'not fill by user',
        country: data.country_name || 'not fill by user',
        region: data.region || 'not fill by user',
        city: data.city || 'not fill by user'
      };
    }
  } catch (err) {
    console.error('Error fetching geo info:', err);
  }
  return {
    ip: 'not fill by user',
    country: 'not fill by user',
    region: 'not fill by user',
    city: 'not fill by user'
  };
};

export const submitLead = async (formData) => {
  try {
    const geo = await getGeoInfo();
    const payload = {
      ...formData,
      ip2loc_ip: geo.ip,
      ip2loc_country: geo.country,
      ip2loc_region: geo.region,
      ip2loc_city: geo.city,
      pageurl: typeof window !== 'undefined' ? window.location.href : 'not fill by user'
    };

    const response = await fetch('/api/send-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('Lead submitted successfully!');
    } else {
      console.error('Lead submission failed');
    }
  } catch (error) {
    console.error('Error submitting lead:', error);
  } finally {
    if (typeof window !== 'undefined') {
      window.location.href = '/thank-you';
    }
  }
};
