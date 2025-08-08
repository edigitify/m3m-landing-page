const Location = () => (
  <section className="py-16 px-4 bg-gray-100 text-center">
    <h3 className="text-3xl font-bold mb-6">Prime Location</h3>
    <div className="max-w-4xl mx-auto">
      <iframe
        title="location-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.116400928034!2d77.38351817536635!3d28.626251275672327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce558ef36a529%3A0xe2c99ed175a1dc5e!2sSector%2072%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1692891612739!5m2!1sen!2sin"
        width="100%"
        height="450"
        className="rounded"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default Location;
