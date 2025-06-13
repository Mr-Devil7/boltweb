import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'राम सिंह / ராம் சிங்',
      role: 'जैविक किसान / இயற்கை விவசாயி',
      location: 'जयपुर, राजस्थान / ஜெய்ப்பூர், ராஜஸ்தான்',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Agrow की सिंचाई प्रणाली ने हमारे खेत के संचालन को बदल दिया है। हमने पानी का उपयोग 40% कम किया है और फसल की पैदावार बढ़ाई है। / Agrow இன் நீர்ப்பாசன அமைப்பு எங்கள் பண்ணை செயல்பாடுகளை மாற்றியுள்ளது. நாங்கள் நீர் பயன்பாட்டை 40% குறைத்துள்ளோம்.'
    },
    {
      name: 'मुरुगन / முருகன்',
      role: 'व्यावसायिक किसान / வணிக விவசாயி',
      location: 'चेन्नई, तमिलनाडु / சென்னை, தமிழ்நாடு',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'फसल निगरानी प्रणाली हमारे बड़े पैमाने के संचालन के लिए गेम-चेंजर रही है। समस्याओं का जल्दी पता लगाने से हमें हजारों रुपये बचाए हैं। / பயிர் கண்காணிப்பு அமைப்பு எங்கள் பெரிய அளவிலான செயல்பாடுகளுக்கு விளையாட்டை மாற்றியுள்ளது.'
    },
    {
      name: 'प्रिया शर्मा / பிரியா சர்மா',
      role: 'ग्रीनहाउस प्रबंधक / கிரீன்ஹவுஸ் மேலாளர்',
      location: 'उदयपुर, राजस्थान / உதய்ப்பூர், ராஜஸ்தான்',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Agrow से स्वचालित ग्रीनहाउस सिस्टम ने हमारी फसल प्रबंधन को क्रांतिकारी बना दिया है। सटीक नियंत्रण और वास्तविक समय निगरानी से हमारी फसल की गुणवत्ता में काफी सुधार हुआ है। / Agrow இன் தானியங்கி கிரீன்ஹவுஸ் அமைப்பு எங்கள் பயிர் மேலாண்மையை புரட்சிகரமாக மாற்றியுள்ளது.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            हमारे ग्राहक क्या कहते हैं
            <br />
            <span className="text-3xl text-green-600">எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            उन किसानों और कृषि पेशेवरों से सुनें जिन्होंने हमारे नवाचार समाधानों के साथ 
            अपने संचालन को बदल दिया है।
            <br />
            <span className="text-lg mt-2 block">
              எங்கள் புதுமையான தீர்வுகளுடன் தங்கள் செயல்பாடுகளை மாற்றிய விவசாயிகள் 
              மற்றும் விவசாய நிபுணர்களிடமிருந்து கேளுங்கள்.
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border-l-4 border-green-600">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="mb-6">
                <Quote className="h-8 w-8 text-green-600 mb-4" />
                <p className="text-gray-700 leading-relaxed text-sm">{testimonial.text}</p>
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-green-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-green-600 font-medium">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            दुनिया भर में हजारों संतुष्ट ग्राहकों से जुड़ें / உலகம் முழுவதும் ஆயிரக்கணக்கான திருப்தியான வாடிக்கையாளர்களுடன் சேருங்கள்
          </p>
          <button className="bg-gradient-to-r from-green-600 to-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:from-green-700 hover:to-orange-700 transition-all duration-200">
            अपनी यात्रा शुरू करें / உங்கள் பயணத்தைத் தொடங்குங்கள்
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;