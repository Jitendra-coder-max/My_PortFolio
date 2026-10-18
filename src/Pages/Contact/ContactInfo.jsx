import Email from "@iconscout/react-unicons/icons/uil-envelope";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const ContactInfo = [
  {
    icon: [
      <Email key="email" color="#F84437" size="2rem" />,
      <Whatsapp key="whatsapp" color="#4DCB5B" size="2rem" />,
      <Linkedin key="linkedin" color="#0077B7" size="2rem" />,
    ],
    title: ["Gmail", "WhatsApp", "Linkedin"],
    subtitle: ["jitendra.tech.eng@", "+91 8770283437", "Jitendra Nishad"],
    link: [
      "mailto:jitendra.tech.eng@gmail.com",
      "https://api.whatsapp.com/send?phone=8770283437",
      "https://www.linkedin.com/in/jitendra-nishad-24b479191/",
    ],
  },
];

export default ContactInfo;
