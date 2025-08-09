import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Анна",
    image: "img/8ad5ec67-889d-4b4a-98b3-c92d329795d6.jpg",
    comment: "Получила этот тренч совершенно бесплатно через наш клуб. Смотрится дорого, качество — как в магазине!",
    rating: 5
  },
  {
    id: 2,
    name: "Оксана", 
    image: "img/f868dc19-1ace-4bcd-a10c-99a538dac461.jpg",
    comment: "Очередной любимый образ из бесплатных вещей — эта сумка уже стала фаворитом!",
    rating: 5
  },
  {
    id: 3,
    name: "Елена",
    image: "img/06157653-14a0-48c9-8415-9d6ae63f4888.jpg",
    comment: "Не могла поверить, что такую стильную одежду можно получить бесплатно. Теперь постоянно участвую в клубе!",
    rating: 5
  },
  {
    id: 4,
    name: "Мария",
    image: "img/8ad5ec67-889d-4b4a-98b3-c92d329795d6.jpg",
    comment: "Качество превзошло все ожидания! Выгляжу как модель, а потратила 0 рублей 😍",
    rating: 5
  },
  {
    id: 5,
    name: "Дарья",
    image: "img/f868dc19-1ace-4bcd-a10c-99a538dac461.jpg",
    comment: "Друзья спрашивают, где покупаю такие вещи. А я получаю их бесплатно в Женском клубе!",
    rating: 5
  },
  {
    id: 6,
    name: "София",
    image: "img/06157653-14a0-48c9-8415-9d6ae63f4888.jpg",
    comment: "Уже третий месяц участвую — гардероб пополнился десятками стильных вещей!",
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
};

const ReviewCard = ({ review, index }: { review: typeof reviews[0], index: number }) => {
  return (
    <Card 
      className="p-4 mb-4 bg-white shadow-sm border border-gray-100 rounded-2xl animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
          <img 
            src={review.image} 
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-wb-text text-lg">{review.name}</h4>
            <StarRating rating={review.rating} />
          </div>
          <p className="text-wb-text/80 text-sm leading-relaxed">{review.comment}</p>
        </div>
      </div>
    </Card>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Hero Section */}
      <div className="relative px-4 py-16 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-wb-purple/10"></div>
          <div className="absolute bottom-40 right-16 w-24 h-24 rounded-2xl bg-wb-orange/10"></div>
          <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-wb-purple/5"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-wb-purple mb-6 leading-tight">
            Женский клуб —<br />
            Бесплатный Wildberries
          </h1>
          <p className="text-xl md:text-2xl text-wb-text mb-8 max-w-2xl mx-auto leading-relaxed">
            Реальные отзывы участниц. Без посредников. Без оплаты.
          </p>
          <Button 
            size="lg" 
            className="bg-wb-orange hover:bg-wb-orange/90 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Хочу в клуб
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="px-4 pb-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-wb-text mb-8 text-center">Отзывы участниц клуба</h2>
          <div className="space-y-0">
            {reviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 py-16 text-center bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <Button 
            size="lg"
            className="bg-wb-orange hover:bg-wb-orange/90 text-white px-12 py-6 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 mb-4"
          >
            Присоединиться к Женскому клубу
            <Icon name="ArrowRight" size={24} className="ml-2" />
          </Button>
          <p className="text-sm text-gray-600">
            Мы не собираем данные. Никаких платных подписок.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-wb-purple">WB</div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-600 hover:text-wb-purple transition-colors">Контакты</a>
              <a href="#" className="text-gray-600 hover:text-wb-purple transition-colors">Правила</a>
              <a href="#" className="text-gray-600 hover:text-wb-purple transition-colors">FAQ</a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-wb-purple transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-wb-purple transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-wb-purple transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              Женский клуб не является официальным проектом Wildberries
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;