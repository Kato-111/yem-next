import { Progress } from "@/components/ui/progress";
import { Heart } from "lucide-react";

export default function Charity() {
  const donationProgress = 0;

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-24">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="p-8 sm:p-12">
          <div className="flex items-center mb-6">
            <Heart className="text-red-500 w-8 h-8 mr-3" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Fund us for a better future
            </h1>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-4">
            &quot;Young Engineers Mongolia&quot;
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            &quot;Young Engineers Mongolia&quot; байгууллага нь залуучуудын удирдсан
            байгууллага бөгөөд бид ирээдүйн Монголын инженерийн ажлын хүчийг
            нэмэгдүүлэх алсын хараатайгаар тууштай, хүчин төгс ажиллаж байна.
            Бидний ажлын урсгалыг нэмэгдүүлж, юм хийе гэсэн залуучуудаа дэмжих
            хүсэлтэй байвал доор дансаар бидэнд хандив өргөөрэй.
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Donation Progress
            </h3>
            <Progress value={donationProgress} className="h-4" />
            <p className="text-sm text-gray-500 mt-2">
              {donationProgress}% of our goal reached
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Donation Account
            </h3>
            <div className="flex items-center">
              <p className="text-2xl font-bold text-orange-600 mb-1">
                5112419859
              </p>
            </div>
            <p className="text-gray-700 text-lg">Мөнхбатын Болормаа</p>
          </div>
        </div>
      </div>
    </section>
  );
}
