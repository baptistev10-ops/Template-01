import { googleMaps, labelContacts, titleContact } from "../config/site.config";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div data-aos="fade-right">
          <h3 className="text-3xl font-black mb-8 uppercase">
            {titleContact.title}
          </h3>
          {labelContacts.map((labelContact, index) => (
            <div key={index} className="space-y-6 text-lg text-gray-300">
              <p>
                <strong className="text-white block mb-1">
                  {labelContact.label}
                </strong>{" "}
                {labelContact.click === true ? (
                  <a
                    href={
                      (labelContact.mode === "mail" &&
                        `mailto:${labelContact.mail}`) ||
                      (labelContact.mode === "phone" &&
                        `tel:${labelContact.phone}`) ||
                      (labelContact.mode === "lien" && labelContact.link) ||
                      (labelContact.mode === "" && "")
                    }
                    target={labelContact.targetBlank === true ? "_blank" : ""}
                  >
                    {labelContact.contact}
                  </a>
                ) : (
                  <span>{labelContact.contact}</span>
                )}
              </p>
            </div>
          ))}
        </div>
        <div data-aos="fade-left" className="h-full w-full">
          <div className="w-full h-80 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center text-gray-500 font-bold uppercase shadow-xl">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                googleMaps.googleMaps.address
              )}&output=embed`}
              className="w-full h-full rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
