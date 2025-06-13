import React from 'react';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'विशेषज्ञ टीम / நிபுணர் குழு',
      description: 'भारतीय कृषि विशेषज्ञ और तकनीकी विशेषज्ञ मिलकर नवाचार के लिए काम कर रहे हैं। / இந்திய விவசாய பொறியாளர்கள் மற்றும் தொழில்நுட்ப நிபுணர்கள் புதுமைக்காக ஒன்றாக பணியாற்றுகின்றனர்।'
    },
    {
      icon: Award,
      title: 'सिद्ध परिणाम / நிரூபிக்கப்பட்ட முடிவுகள்',
      description: 'पुरस्कार विजेता समाधान जिन्होंने भारत भर में हजारों खेतों को बदल दिया है। / இந்தியா முழுவதும் ஆயிரக்கணக்கான பண்ணைகளை மாற்றிய விருது பெற்ற தீர்வுகள்।'
    },
    {
      icon: Globe,
      title: 'स्थानीय पहुंच / உள்ளூர் அணுகல்',
      description: 'राजस्थान और तमिलनाडु के किसानों को स्थानीय सहायता और समाधान प्रदान करना। / ராஜஸ்தான் மற்றும் தமிழ்நாடு விவசாயிகளுக்கு உள்ளூர் ஆதரவு மற்றும் தீர்வுகளை வழங்குதல்।'
    },
    {
      icon: TrendingUp,
      title: 'विकास केंद्रित / வளர்ச்சி மையம்',
      description: 'किसानों को लागत और पर्यावरणीय प्रभाव कम करते हुए उत्पादन बढ़ाने में मदद करना। / செலவு மற்றும் சுற்றுச்சூழல் தாக்கத்தை குறைக்கும் போது விளைச்சலை அதிகரிக்க விவசாயிகளுக்கு உதவுதல்।'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Agrow के बारे में / Agrow பற்றி
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            हम नवाचार प्रौद्योगिकी समाधानों के माध्यम से कृषि में क्रांति ला रहे हैं जो किसानों को 
            टिकाऊ और लाभदायक कृषि प्रथाओं को प्राप्त करने के लिए सशक्त बनाते हैं।
            <br />
            <span className="text-lg mt-2 block">
              நாங்கள் விவசாயிகளை நிலையான மற்றும் லாபகரமான விவசாய நடைமுறைகளை அடைய 
              அதிகாரம் அளிக்கும் புதுமையான தொழில்நுட்ப தீர்வுகள் மூலம் விவசாயத்தில் புரட்சி செய்கிறோம்।
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="भारतीय कृषि नवाचार / இந்திய விவசாய புதுமை"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              प्रौद्योगिकी के साथ कृषि का रूपांतरण
              <br />
              <span className="text-2xl text-green-600">
                தொழில்நுட்பத்துடன் விவசாயத்தை மாற்றுதல்
              </span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              2020 में स्थापित, Agrow भारतीय कृषि प्रौद्योगिकी नवाचार में अग्रणी रहा है। 
              हमारा मिशन पारंपरिक कृषि प्रथाओं और आधुनिक प्रौद्योगिकी के बीच की खाई को पाटना है।
            </p>
            <p className="text-gray-600 leading-relaxed">
              2020 இல் நிறுவப்பட்ட Agrow இந்திய விவசாய தொழில்நுட்ப புதுமையில் முன்னணியில் உள்ளது। 
              பாரம்பரிய விவசாய நடைமுறைகளுக்கும் நவீன தொழில்நுட்பத்திற்கும் இடையிலான இடைவெளியை 
              குறைப்பதே எங்கள் நோக்கம்.
            </p>
            <div className="bg-gradient-to-r from-orange-100 to-green-100 p-4 rounded-lg border-l-4 border-green-600">
              <p className="text-gray-700 font-medium">
                🇮🇳 राजस्थान और तमिलनाडु के किसानों के लिए विशेष रूप से डिज़ाइन किया गया
                <br />
                ராஜஸ்தான் மற்றும் தமிழ்நாடு விவசாயிகளுக்காக சிறப்பாக வடிவமைக்கப்பட்டது
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-orange-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-orange-200 group-hover:to-green-200 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;