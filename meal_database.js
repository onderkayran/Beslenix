// Genişletilmiş yemek veritabanı (kalori aralıklarına göre güncellendi)
const mealDatabase = {
    balanced: [
        // 100-500 kcal arası yemekler
        {
            name: "Izgara Köfte ve Salata",
            description: "Izgara köfte ve mevsim yeşillikleri",
            calories: 450,
            ingredients: [
                { name: "Dana kıyma", amount: "120 gr" },
                { name: "Marul", amount: "2 yaprak" },
                { name: "Domates", amount: "1 adet" },
                { name: "Soğan", amount: "1 adet" }
            ]
        },
        {
            name: "Tavuk Şiş",
            description: "Marine edilmiş tavuk şiş ve ızgara sebze",
            calories: 350,
            ingredients: [
                { name: "Tavuk göğsü", amount: "150 gr" },
                { name: "Biber", amount: "1 adet" },
                { name: "Domates", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Mercimek Çorbası",
            description: "Geleneksel Türk mercimek çorbası",
            calories: 280,
            ingredients: [
                { name: "Kırmızı mercimek", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Yoğurtlu Tavuk Salata",
            description: "Yoğurt soslu tavuk göğsü salatası",
            calories: 380,
            ingredients: [
                { name: "Tavuk göğsü", amount: "100 gr" },
                { name: "Yoğurt", amount: "100 gr" },
                { name: "Marul", amount: "4 yaprak" },
                { name: "Salatalık", amount: "1 adet" }
            ]
        },
        {
            name: "Sebzeli Balık Buğulama",
            description: "Hafif baharatlı buğulama balık ve buharda sebze",
            calories: 320,
            ingredients: [
                { name: "Levrek fileto", amount: "150 gr" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Brokoli", amount: "100 gr" },
                { name: "Limon", amount: "1 adet" }
            ]
        },
        {
            name: "Yulaflı Tavuk Göğsü",
            description: "Yulaf kaplama tavuk göğsü ve yeşillikler",
            calories: 420,
            ingredients: [
                { name: "Tavuk göğsü", amount: "120 gr" },
                { name: "Yulaf ezmesi", amount: "30 gr" },
                { name: "Roka", amount: "1 demet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Lor Peynirli Salata",
            description: "Taze otlar ve lor peyniri ile hazırlanmış salata",
            calories: 280,
            ingredients: [
                { name: "Lor peyniri", amount: "100 gr" },
                { name: "Roka", amount: "2 demet" },
                { name: "Ceviz içi", amount: "20 gr" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Tavuk Wrap",
            description: "Tam buğday lavaşına sarılmış tavuk ve sebze",
            calories: 450,
            ingredients: [
                { name: "Tavuk göğsü", amount: "100 gr" },
                { name: "Tam buğday lavaş", amount: "1 adet" },
                { name: "Karışık yeşillik", amount: "1 porsiyon" },
                { name: "Light süzme yoğurt", amount: "30 gr" }
            ]
        },
        {
            name: "Izgara Köfte Mini Porsiyon",
            description: "Az yağlı ızgara köfte ve közlenmiş sebze",
            calories: 380,
            ingredients: [
                { name: "Dana kıyma", amount: "100 gr" },
                { name: "Közlenmiş biber", amount: "2 adet" },
                { name: "Domates", amount: "1 adet" },
                { name: "Maydanoz", amount: "1/2 demet" }
            ]
        },
        {
            name: "Ton Balıklı Kinoa Bowl",
            description: "Light ton balığı ve kinoa karışımı",
            calories: 420,
            ingredients: [
                { name: "Light ton balığı", amount: "100 gr" },
                { name: "Kinoa", amount: "50 gr" },
                { name: "Salatalık", amount: "1 adet" },
                { name: "Cherry domates", amount: "5 adet" }
            ]
        },
        // 500-1000 kcal arası yemekler
        {
            name: "Etli Taze Fasulye",
            description: "Zeytinyağlı taze fasulye ve et sote",
            calories: 650,
            ingredients: [
                { name: "Dana eti", amount: "100 gr" },
                { name: "Taze fasulye", amount: "250 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Domates", amount: "2 adet" }
            ]
        },
        {
            name: "Tavuklu Pilav",
            description: "Tavuk parçaları ile pirinç pilavı",
            calories: 750,
            ingredients: [
                { name: "Tavuk but", amount: "200 gr" },
                { name: "Pirinç", amount: "1 su bardağı" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Tereyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Kıymalı Ispanak",
            description: "Kıymalı ıspanak yemeği ve bulgur pilavı",
            calories: 580,
            ingredients: [
                { name: "Dana kıyma", amount: "150 gr" },
                { name: "Ispanak", amount: "500 gr" },
                { name: "Bulgur", amount: "1/2 su bardağı" },
                { name: "Soğan", amount: "1 adet" }
            ]
        },
        {
            name: "Etli Bezelye",
            description: "Dana etli bezelye yemeği",
            calories: 620,
            ingredients: [
                { name: "Dana kuşbaşı", amount: "150 gr" },
                { name: "Bezelye", amount: "300 gr" },
                { name: "Havuç", amount: "2 adet" },
                { name: "Patates", amount: "1 adet" }
            ]
        },
        {
            name: "Tavuklu Sebze Sote",
            description: "Tavuk ve karışık sebze sotesi",
            calories: 520,
            ingredients: [
                { name: "Tavuk göğsü", amount: "200 gr" },
                { name: "Brokoli", amount: "200 gr" },
                { name: "Havuç", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Etli Bamya",
            description: "Dana etli bamya yemeği",
            calories: 580,
            ingredients: [
                { name: "Dana eti", amount: "150 gr" },
                { name: "Bamya", amount: "300 gr" },
                { name: "Domates", amount: "2 adet" },
                { name: "Soğan", amount: "1 adet" }
            ]
        },
        // 1000-1500 kcal arası yemekler
        {
            name: "Etli Bezelye ve Pirinç Pilavı",
            description: "Bezelye, kuşbaşı et ve yanında sade pilavla geleneksel bir akşam yemeği.",
            calories: 1150,
            ingredients: [
                { name: "Dana kuşbaşı", amount: "200 gr" },
                { name: "Bezelye", amount: "1 su bardağı" },
                { name: "Pirinç", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" }
            ]
        },
        {
            name: "Etli Karnıyarık ve Pilav",
            description: "Kıyma dolgulu patlıcan yemeği ve yanında sade pilav.",
            calories: 1300,
            ingredients: [
                { name: "Patlıcan", amount: "2 adet" },
                { name: "Kıyma", amount: "200 gr" },
                { name: "Pirinç", amount: "1 su bardağı" },
                { name: "Domates", amount: "1 adet" }
            ]
        },
        {
            name: "Karışık Kebap Tabağı",
            description: "Çeşitli kebaplar ve pilav ile servis",
            calories: 1400,
            ingredients: [
                { name: "Adana kebap", amount: "150 gr" },
                { name: "Kuzu şiş", amount: "150 gr" },
                { name: "Pirinç pilavı", amount: "1 porsiyon" },
                { name: "Közlenmiş sebze", amount: "1 porsiyon" }
            ]
        },
        {
            name: "Fırın Tavuk ve Sebzeli Pilav",
            description: "Fırında pişmiş bütün tavuk ve sebzeli pilav",
            calories: 1250,
            ingredients: [
                { name: "Tavuk", amount: "1 adet (1.5 kg)" },
                { name: "Pirinç", amount: "2 su bardağı" },
                { name: "Havuç", amount: "2 adet" },
                { name: "Bezelye", amount: "1 su bardağı" }
            ]
        },
        {
            name: "İskender Kebap",
            description: "Döner et, pide, domates sosu ve yoğurt",
            calories: 1450,
            ingredients: [
                { name: "Dana döner", amount: "200 gr" },
                { name: "Pide", amount: "2 adet" },
                { name: "Tereyağı", amount: "30 gr" },
                { name: "Yoğurt", amount: "200 gr" }
            ]
        },
        {
            name: "Kuzu Tandır",
            description: "Fırında pişmiş kuzu eti ve pilav",
            calories: 1350,
            ingredients: [
                { name: "Kuzu but", amount: "300 gr" },
                { name: "Pirinç", amount: "1.5 su bardağı" },
                { name: "Patates", amount: "2 adet" },
                { name: "Havuç", amount: "2 adet" }
            ]
        },
        {
            name: "Etli Güveç",
            description: "Fırında pişmiş etli sebze güveç",
            calories: 1200,
            ingredients: [
                { name: "Dana eti", amount: "250 gr" },
                { name: "Patlıcan", amount: "2 adet" },
                { name: "Patates", amount: "2 adet" },
                { name: "Domates", amount: "3 adet" }
            ]
        },
        {
            name: "Karışık Izgara",
            description: "Çeşitli ızgara etler ve garnitür",
            calories: 1480,
            ingredients: [
                { name: "Pirzola", amount: "200 gr" },
                { name: "Köfte", amount: "150 gr" },
                { name: "Tavuk şiş", amount: "150 gr" },
                { name: "Pilav", amount: "1 porsiyon" }
            ]
        },
        {
            name: "Etli Kapama",
            description: "Pirinç yatağında kuzu eti",
            calories: 1380,
            ingredients: [
                { name: "Kuzu eti", amount: "300 gr" },
                { name: "Pirinç", amount: "2 su bardağı" },
                { name: "Nohut", amount: "1 su bardağı" },
                { name: "Tereyağı", amount: "50 gr" }
            ]
        },
        {
            name: "Tepsi Kebabı",
            description: "Fırında pişmiş kıymalı patates dizme",
            calories: 1280,
            ingredients: [
                { name: "Dana kıyma", amount: "300 gr" },
                { name: "Patates", amount: "4 adet" },
                { name: "Patlıcan", amount: "3 adet" },
                { name: "Domates", amount: "3 adet" }
            ]
        },
        {
            name: "Izgara Kuzu ve Sebze",
            calories: 650,
            description: "Taze baharatlarla marine edilmiş kuzu eti ve ızgara sebzeler",
            dietType: "balanced",
            ingredients: [
                { name: "Kuzu but", amount: "200gr" },
                { name: "Patlıcan", amount: "1 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Biber", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ],
            recipe: [
                "Kuzu etini marine edin",
                "Sebzeleri hazırlayın",
                "Izgarayı ısıtın",
                "Eti pişirin",
                "Sebzeleri ızgarada pişirin"
            ]
        },
        {
            name: "Tavuk Sote ve Sebze",
            calories: 450,
            description: "Julyen doğranmış tavuk göğsü ve mevsim sebzeleri",
            dietType: "balanced",
            ingredients: [
                { name: "Tavuk göğsü", amount: "150gr" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Brokoli", amount: "100gr" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ],
            recipe: [
                "Tavuğu kuşbaşı doğrayın",
                "Sebzeleri hazırlayın",
                "Tavuğu soteleyin",
                "Sebzeleri ekleyin",
                "Baharatları ekleyip karıştırın"
            ]
        },
        {
            name: "Izgara Köfte",
            description: "Baharatlı ızgara köfte",
            calories: 680,
            ingredients: [
                { name: "Dana kıyma", amount: "250 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Maydanoz", amount: "1/2 demet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Tavuk Kapama",
            description: "Fırında baharatlı bütün tavuk but",
            calories: 720,
            ingredients: [
                { name: "Tavuk but", amount: "4 adet" },
                { name: "Sarımsak", amount: "4 diş" },
                { name: "Biberiye", amount: "2 dal" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Limon", amount: "1 adet" }
            ]
        },
        {
            name: "Mantarlı Dana Sote",
            description: "Dana eti ve mantar sote, karabiberli",
            calories: 680,
            ingredients: [
                { name: "Dana eti", amount: "200 gr" },
                { name: "Mantar", amount: "300 gr" },
                { name: "Tereyağı", amount: "30 gr" },
                { name: "Sarımsak", amount: "3 diş" }
            ]
        },
        {
            name: "Izgara Levrek",
            description: "Fesleğenli ızgara levrek fileto",
            calories: 550,
            ingredients: [
                { name: "Levrek fileto", amount: "300 gr" },
                { name: "Fesleğen", amount: "1 demet" },
                { name: "Limon", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Kuzu Pirzola",
            description: "Biberiyeli ızgara kuzu pirzola",
            calories: 850,
            ingredients: [
                { name: "Kuzu pirzola", amount: "300 gr" },
                { name: "Biberiye", amount: "3 dal" },
                { name: "Sarımsak", amount: "4 diş" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        }
    ],
    vegetarian: [
        // 100-500 kcal arası yemekler
        {
            name: "Mercimek Çorbası",
            description: "Geleneksel Türk mercimek çorbası",
            calories: 220,
            ingredients: [
                { name: "Kırmızı mercimek", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Mevsim Salatası",
            description: "Peynirli mevsim yeşillikleri",
            calories: 250,
            ingredients: [
                { name: "Marul", amount: "4 yaprak" },
                { name: "Beyaz peynir", amount: "50 gr" },
                { name: "Domates", amount: "1 adet" },
                { name: "Salatalık", amount: "1 adet" }
            ]
        },
        {
            name: "Yoğurtlu Havuç Salatası",
            description: "Yoğurt soslu rendelenmiş havuç",
            calories: 180,
            ingredients: [
                { name: "Havuç", amount: "2 adet" },
                { name: "Yoğurt", amount: "100 gr" },
                { name: "Sarımsak", amount: "1 diş" },
                { name: "Zeytinyağı", amount: "1 tatlı kaşığı" }
            ]
        },
        {
            name: "Yumurtalı Ispanak",
            description: "Yumurtalı ıspanak yemeği",
            calories: 320,
            ingredients: [
                { name: "Ispanak", amount: "300 gr" },
                { name: "Yumurta", amount: "2 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Peynirli Omlet",
            description: "Beyaz peynirli ve sebzeli omlet",
            calories: 380,
            ingredients: [
                { name: "Yumurta", amount: "3 adet" },
                { name: "Beyaz peynir", amount: "50 gr" },
                { name: "Domates", amount: "1 adet" },
                { name: "Biber", amount: "1 adet" }
            ]
        },
        {
            name: "Yumurtalı Ispanak Sote",
            description: "Taze ıspanak ve yumurta ile hazırlanmış hafif bir öğün.",
            calories: 280,
            ingredients: [
                { name: "Ispanak", amount: "300 gr" },
                { name: "Yumurta", amount: "2 adet" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Limon", amount: "1/2 adet" }
            ]
        },
        {
            name: "Peynirli Kabak Mücver",
            description: "Rendelenmiş kabak ve beyaz peynir ile hazırlanmış fırında mücver.",
            calories: 350,
            ingredients: [
                { name: "Kabak", amount: "3 adet" },
                { name: "Beyaz peynir", amount: "100 gr" },
                { name: "Yumurta", amount: "1 adet" },
                { name: "Dereotu", amount: "1/2 demet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Yoğurtlu Pancar Salatası",
            description: "Haşlanmış pancar, yoğurt ve ceviz ile hazırlanmış besleyici salata.",
            calories: 290,
            ingredients: [
                { name: "Pancar", amount: "2 adet" },
                { name: "Yoğurt", amount: "200 gr" },
                { name: "Ceviz", amount: "50 gr" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        // 500-1000 kcal arası yemekler
        {
            name: "Sebzeli Makarna",
            description: "Karışık sebzeli makarna",
            calories: 650,
            ingredients: [
                { name: "Makarna", amount: "100 gr" },
                { name: "Brokoli", amount: "100 gr" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Mantarlı Risotto",
            description: "Kremalı mantarlı risotto",
            calories: 750,
            ingredients: [
                { name: "Arborio pirinci", amount: "1 su bardağı" },
                { name: "Mantar", amount: "200 gr" },
                { name: "Krema", amount: "100 ml" },
                { name: "Parmesan", amount: "50 gr" }
            ]
        },
        {
            name: "Peynirli Pide",
            description: "Karışık peynirli pide",
            calories: 680,
            ingredients: [
                { name: "Un", amount: "200 gr" },
                { name: "Beyaz peynir", amount: "100 gr" },
                { name: "Kaşar peyniri", amount: "100 gr" },
                { name: "Tereyağı", amount: "30 gr" }
            ]
        },
        {
            name: "Karnıyarık",
            description: "Sebzeli karnıyarık",
            calories: 580,
            ingredients: [
                { name: "Patlıcan", amount: "3 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Biber", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
            ]
        },
        {
            name: "Patates Graten",
            description: "Kremalı fırın patates",
            calories: 820,
            ingredients: [
                { name: "Patates", amount: "4 adet" },
                { name: "Krema", amount: "200 ml" },
                { name: "Kaşar peyniri", amount: "100 gr" },
                { name: "Sarımsak", amount: "2 diş" }
            ]
        },
        {
            name: "Peynirli Ispanaklı Gözleme",
            description: "El açması hamur ile hazırlanmış, ıspanak ve peynir dolgulu gözleme.",
            calories: 680,
            ingredients: [
                { name: "Un", amount: "200 gr" },
                { name: "Ispanak", amount: "300 gr" },
                { name: "Beyaz peynir", amount: "150 gr" },
                { name: "Tereyağı", amount: "50 gr" },
                { name: "Yoğurt", amount: "100 gr" }
            ]
        },
        {
            name: "Patlıcan Graten",
            description: "Fırında peynir ve beşamel sos ile hazırlanmış patlıcan graten.",
            calories: 750,
            ingredients: [
                { name: "Patlıcan", amount: "3 adet" },
                { name: "Kaşar peyniri", amount: "200 gr" },
                { name: "Süt", amount: "300 ml" },
                { name: "Un", amount: "30 gr" },
                { name: "Tereyağı", amount: "40 gr" }
            ]
        },
        {
            name: "Sebzeli Mantı",
            description: "Patates, havuç ve mantarla hazırlanmış mantı, yoğurt sosu ile servis edilir.",
            calories: 820,
            ingredients: [
                { name: "Mantı hamuru", amount: "300 gr" },
                { name: "Patates", amount: "200 gr" },
                { name: "Havuç", amount: "150 gr" },
                { name: "Mantar", amount: "200 gr" },
                { name: "Yoğurt", amount: "250 gr" }
            ]
        },
        // 1000-1500 kcal arası yemekler
        {
            name: "Peynirli Börek Tabağı",
            description: "Çeşitli peynirli börekler",
            calories: 1200,
            ingredients: [
                { name: "Yufka", amount: "500 gr" },
                { name: "Beyaz peynir", amount: "200 gr" },
                { name: "Tereyağı", amount: "100 gr" },
                { name: "Maydanoz", amount: "1 demet" }
            ]
        },
        {
            name: "Sebzeli Pizza",
            description: "Ev yapımı sebzeli pizza",
            calories: 1350,
            ingredients: [
                { name: "Pizza hamuru", amount: "400 gr" },
                { name: "Mozzarella", amount: "200 gr" },
                { name: "Mantar", amount: "200 gr" },
                { name: "Biber", amount: "2 adet" }
            ]
        },
        {
            name: "Fırın Makarna",
            description: "Beşamel soslu fırın makarna",
            calories: 1280,
            ingredients: [
                { name: "Makarna", amount: "400 gr" },
                { name: "Kaşar peyniri", amount: "200 gr" },
                { name: "Süt", amount: "500 ml" },
                { name: "Tereyağı", amount: "50 gr" }
            ]
        },
        {
            name: "Sebzeli Lazanya",
            description: "Sebzeli ve peynirli lazanya",
            calories: 1450,
            ingredients: [
                { name: "Lazanya yaprağı", amount: "400 gr" },
                { name: "Ispanak", amount: "300 gr" },
                { name: "Ricotta peyniri", amount: "250 gr" },
                { name: "Mozzarella", amount: "200 gr" }
            ]
        },
        {
            name: "Mantı",
            description: "Yoğurtlu mantı",
            calories: 1180,
            ingredients: [
                { name: "Mantı hamuru", amount: "400 gr" },
                { name: "Yoğurt", amount: "500 gr" },
                { name: "Tereyağı", amount: "50 gr" },
                { name: "Domates sosu", amount: "100 gr" }
            ]
        },
        {
            name: "Peynirli Gözleme Tabağı",
            description: "Çeşitli peynirli gözlemeler",
            calories: 1250,
            ingredients: [
                { name: "Gözleme hamuru", amount: "400 gr" },
                { name: "Beyaz peynir", amount: "200 gr" },
                { name: "Kaşar peyniri", amount: "150 gr" },
                { name: "Tereyağı", amount: "50 gr" }
            ]
        },
        {
            name: "Sebzeli Güveç",
            description: "Fırında sebze güveç",
            calories: 1150,
            ingredients: [
                { name: "Patlıcan", amount: "3 adet" },
                { name: "Patates", amount: "3 adet" },
                { name: "Domates", amount: "4 adet" },
                { name: "Kaşar peyniri", amount: "200 gr" }
            ]
        },
        {
            name: "Kumpir",
            description: "Bol malzemeli kumpir",
            calories: 1480,
            ingredients: [
                { name: "Büyük boy patates", amount: "2 adet" },
                { name: "Kaşar peyniri", amount: "200 gr" },
                { name: "Tereyağı", amount: "100 gr" },
                { name: "Garnitür", amount: "300 gr" }
            ]
        },
        {
            name: "Peynirli Su Böreği",
            description: "Geleneksel su böreği",
            calories: 1380,
            ingredients: [
                { name: "Yufka", amount: "500 gr" },
                { name: "Beyaz peynir", amount: "300 gr" },
                { name: "Tereyağı", amount: "150 gr" },
                { name: "Süt", amount: "500 ml" }
            ]
        },
        {
            name: "Sebzeli Krep",
            description: "Sebzeli ve peynirli krep tabağı",
            calories: 1280,
            ingredients: [
                { name: "Krep hamuru", amount: "400 gr" },
                { name: "Ispanak", amount: "300 gr" },
                { name: "Mantar", amount: "200 gr" },
                { name: "Kaşar peyniri", amount: "200 gr" }
            ]
        },
        {
            name: "Sebzeli Kinoa",
            calories: 350,
            description: "Renkli biberler ve mantarla hazırlanmış kinoa tabağı",
            dietType: "vegetarian",
            ingredients: [
                { name: "Kinoa", amount: "100gr" },
                { name: "Mantar", amount: "100gr" },
                { name: "Renkli biberler", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ],
            recipe: [
                "Kinoayı haşlayın",
                "Sebzeleri doğrayın",
                "Mantarları soteleyin",
                "Tüm malzemeleri karıştırın"
            ]
        }
    ],
    vegan: [
        // 100-500 kcal arası yemekler
        {
            name: "Karabuğdaylı Yeşil Salata",
            description: "Karabuğday, avokado ve taze yeşilliklerle hazırlanmış besleyici salata.",
            calories: 320,
            ingredients: [
                { name: "Karabuğday", amount: "100 gr" },
                { name: "Roka", amount: "100 gr" },
                { name: "Avokado", amount: "1/2 adet" },
                { name: "Cherry domates", amount: "100 gr" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Közlenmiş Patlıcan Salatası",
            description: "Közlenmiş patlıcan, domates ve yeşilliklerle hazırlanmış hafif salata.",
            calories: 280,
            ingredients: [
                { name: "Patlıcan", amount: "2 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Maydanoz", amount: "1 demet" },
                { name: "Limon", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Kinoa Çorbası",
            description: "Kinoa ve mevsim sebzeleri ile hazırlanmış besleyici çorba.",
            calories: 420,
            ingredients: [
                { name: "Kinoa", amount: "80 gr" },
                { name: "Havuç", amount: "2 adet" },
                { name: "Kabak", amount: "1 adet" },
                { name: "Brokoli", amount: "100 gr" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Yeşil Salata",
            description: "Karışık yeşillikli salata",
            calories: 180,
            ingredients: [
                { name: "Marul", amount: "1 adet" },
                { name: "Roka", amount: "1 demet" },
                { name: "Salatalık", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Mercimek Çorbası",
            description: "Sebzeli kırmızı mercimek çorbası",
            calories: 220,
            ingredients: [
                { name: "Kırmızı mercimek", amount: "1 su bardağı" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Közlenmiş Patlıcan Salatası",
            description: "Közlenmiş patlıcan ve biber salatası",
            calories: 280,
            ingredients: [
                { name: "Patlıcan", amount: "2 adet" },
                { name: "Kapya biber", amount: "2 adet" },
                { name: "Domates", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Noodle",
            description: "Sebzeli erişte sote",
            calories: 380,
            ingredients: [
                { name: "Erişte", amount: "100 gr" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Brokoli", amount: "100 gr" },
                { name: "Soya sosu", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Kinoa Salatası",
            description: "Sebzeli kinoa salatası",
            calories: 320,
            ingredients: [
                { name: "Kinoa", amount: "100 gr" },
                { name: "Salatalık", amount: "1 adet" },
                { name: "Cherry domates", amount: "10 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        // 500-1000 kcal arası yemekler
        {
            name: "Sebze Çorbası",
            description: "Karışık sebze çorbası",
            calories: 520,
            ingredients: [
                { name: "Havuç", amount: "2 adet" },
                { name: "Kabak", amount: "1 adet" },
                { name: "Patates", amount: "1 adet" },
                { name: "Brokoli", amount: "1 adet" }
            ]
        },
        {
            name: "Zeytinyağlı Fasulye",
            description: "Zeytinyağlı taze fasulye",
            calories: 650,
            ingredients: [
                { name: "Taze fasulye", amount: "500 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Bulgur Pilavı",
            description: "Bol sebzeli bulgur pilavı",
            calories: 750,
            ingredients: [
                { name: "Bulgur", amount: "2 su bardağı" },
                { name: "Patlıcan", amount: "1 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
            ]
        },
        {
            name: "Zeytinyağlı Pırasa",
            description: "Havuçlu zeytinyağlı pırasa",
            calories: 580,
            ingredients: [
                { name: "Pırasa", amount: "500 gr" },
                { name: "Havuç", amount: "2 adet" },
                { name: "Pirinç", amount: "1/2 su bardağı" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Nohut Yemeği",
            description: "Sebzeli nohut yahnisi",
            calories: 820,
            ingredients: [
                { name: "Nohut", amount: "2 su bardağı" },
                { name: "Havuç", amount: "2 adet" },
                { name: "Patates", amount: "2 adet" },
                { name: "Domates", amount: "2 adet" }
            ]
        },
        // 1000-1500 kcal arası yemekler
        {
            name: "Sebzeli Bulgur Pilavı Özel",
            description: "Karışık sebzeler ve baharatlarla zenginleştirilmiş bulgur pilavı.",
            calories: 580,
            ingredients: [
                { name: "Bulgur", amount: "200 gr" },
                { name: "Karışık sebze", amount: "300 gr" },
                { name: "Mantar", amount: "200 gr" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" },
                { name: "Baharatlar", amount: "1 paket" }
            ]
        },
        {
            name: "Falafel Tabağı",
            description: "Nohut köftesi, humus ve ızgara sebzeler ile servis edilir.",
            calories: 650,
            ingredients: [
                { name: "Nohut", amount: "300 gr" },
                { name: "Maydanoz", amount: "1 demet" },
                { name: "Soğan", amount: "2 adet" },
                { name: "Sarımsak", amount: "4 diş" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Kinoa Tava",
            description: "Karışık sebzeler ve baharatlarla hazırlanmış kinoa tavası.",
            calories: 620,
            ingredients: [
                { name: "Kinoa", amount: "200 gr" },
                { name: "Karışık sebze", amount: "400 gr" },
                { name: "Avokado", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" },
                { name: "Limon", amount: "1 adet" }
            ]
        },
        {
            name: "Sebzeli Makarna",
            description: "Sebzeler ve zeytinyağı ile hazırlanmış tam buğday makarna.",
            calories: 580,
            ingredients: [
                { name: "Tam buğday makarna", amount: "200 gr" },
                { name: "Karışık sebze", amount: "300 gr" },
                { name: "Mantar", amount: "200 gr" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" },
                { name: "Fesleğen", amount: "1 demet" }
            ]
        },
        {
            name: "Mercimekli Sebze Güveç",
            description: "Yeşil mercimek ve sebzelerle hazırlanmış güveç.",
            calories: 750,
            ingredients: [
                { name: "Yeşil mercimek", amount: "200 gr" },
                { name: "Patates", amount: "300 gr" },
                { name: "Havuç", amount: "200 gr" },
                { name: "Domates", amount: "3 adet" },
                { name: "Zeytinyağı", amount: "5 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Nohut Yahni",
            description: "Nohut ve sebzelerle hazırlanmış yahni.",
            calories: 680,
            ingredients: [
                { name: "Nohut", amount: "250 gr" },
                { name: "Patates", amount: "200 gr" },
                { name: "Havuç", amount: "200 gr" },
                { name: "Domates", amount: "4 adet" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Mantarlı Arpa Şehriye",
            description: "Mantar ve sebzelerle hazırlanmış arpa şehriye pilavı.",
            calories: 600,
            ingredients: [
                { name: "Arpa şehriye", amount: "200 gr" },
                { name: "Mantar", amount: "300 gr" },
                { name: "Karışık sebze", amount: "300 gr" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" },
                { name: "Defne yaprağı", amount: "2 adet" }
            ]
        },
        {
            name: "Sebzeli Lazanya",
            description: "Vegan peynirli sebze lazanya",
            calories: 1480,
            ingredients: [
                { name: "Lazanya yaprağı", amount: "400 gr" },
                { name: "Karışık sebze", amount: "600 gr" },
                { name: "Vegan beşamel", amount: "300 gr" },
                { name: "Vegan peynir", amount: "200 gr" }
            ]
        },
        {
            name: "Mantarlı Risotto",
            description: "Kremasız mantarlı risotto",
            calories: 1180,
            ingredients: [
                { name: "Arborio pirinci", amount: "400 gr" },
                { name: "Mantar", amount: "400 gr" },
                { name: "Sebze suyu", amount: "1 litre" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Wrap Tabağı",
            description: "Çeşitli sebzeli wrap'ler",
            calories: 1350,
            ingredients: [
                { name: "Lavaş", amount: "4 adet" },
                { name: "Humus", amount: "300 gr" },
                { name: "Közlenmiş sebze", amount: "400 gr" },
                { name: "Yeşillik", amount: "200 gr" }
            ]
        },
        {
            name: "Karnıbahar Köftesi",
            description: "Fırında karnıbahar köftesi",
            calories: 1200,
            ingredients: [
                { name: "Karnıbahar", amount: "2 adet" },
                { name: "Nohut unu", amount: "200 gr" },
                { name: "Baharatlar", amount: "2 yemek kaşığı" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Tofu Güveç",
            description: "Baharatlı tofu ve karışık sebze güveç",
            calories: 1150,
            ingredients: [
                { name: "Sert tofu", amount: "400 gr" },
                { name: "Patlıcan", amount: "2 adet" },
                { name: "Mantar", amount: "300 gr" },
                { name: "Kabak", amount: "2 adet" },
                { name: "Domates", amount: "3 adet" },
                { name: "Zeytinyağı", amount: "5 yemek kaşığı" }
            ]
        },
        {
            name: "Nohutlu Sebze Pilav",
            description: "Basmati pirinç ve nohutlu sebzeli pilav",
            calories: 1280,
            ingredients: [
                { name: "Basmati pirinç", amount: "300 gr" },
                { name: "Nohut", amount: "250 gr" },
                { name: "Karışık sebze", amount: "400 gr" },
                { name: "Badem", amount: "50 gr" },
                { name: "Kuru üzüm", amount: "50 gr" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
            ]
        },
        {
            name: "Mercimek Köftesi",
            calories: 300,
            description: "Geleneksel Türk mutfağından vegan mercimek köftesi",
            dietType: "vegan",
            ingredients: [
                { name: "Kırmızı mercimek", amount: "200gr" },
                { name: "Bulgur", amount: "100gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ],
            recipe: [
                "Mercimeği haşlayın",
                "Bulguru ıslatın",
                "Soğanı kavurun",
                "Malzemeleri karıştırın",
                "Şekil verip servis yapın"
            ]
        },
        {
            name: "Sebzeli Falafel Tabağı",
            description: "Falafel, humus ve ızgara sebzeler ile servis edilir",
            calories: 1250,
            ingredients: [
                { name: "Falafel", amount: "8 adet" },
                { name: "Humus", amount: "200 gr" },
                { name: "Patlıcan", amount: "2 adet" },
                { name: "Kabak", amount: "2 adet" },
                { name: "Domates", amount: "3 adet" },
                { name: "Tahin", amount: "50 gr" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Vegan Lazanya",
            description: "Vegan peynirli sebze lazanya",
            calories: 1480,
            ingredients: [
                { name: "Lazanya yaprağı", amount: "400 gr" },
                { name: "Karışık sebze", amount: "600 gr" },
                { name: "Vegan beşamel", amount: "300 gr" },
                { name: "Vegan peynir", amount: "200 gr" }
            ]
        }
    ],
    "low-carb": [
        // 100-500 kcal arası yemekler
        {
            name: "Ton Balıklı Salata",
            description: "Light ton balığı ile yeşil salata",
            calories: 280,
            ingredients: [
                { name: "Light ton balığı", amount: "1 kutu" },
                { name: "Marul", amount: "4 yaprak" },
                { name: "Salatalık", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 tatlı kaşığı" }
            ]
        },
        {
            name: "Izgara Tavuk Göğsü",
            description: "Sade ızgara tavuk göğsü",
            calories: 450,
            ingredients: [
                { name: "Tavuk göğsü", amount: "200 gr" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" },
                { name: "Kekik", amount: "1 tatlı kaşığı" }
            ]
        },
        {
            name: "Haşlanmış Yumurta ve Avokado",
            description: "Protein ve sağlıklı yağ kaynağı",
            calories: 320,
            ingredients: [
                { name: "Yumurta", amount: "2 adet" },
                { name: "Avokado", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 tatlı kaşığı" },
                { name: "Karabiber", amount: "1 tutam" }
            ]
        },
        {
            name: "Izgara Hindi Göğsü",
            description: "Baharatlı ızgara hindi göğsü",
            calories: 380,
            ingredients: [
                { name: "Hindi göğsü", amount: "150 gr" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" },
                { name: "Karışık baharat", amount: "1 tatlı kaşığı" }
            ]
        },
        {
            name: "Izgara Somon",
            description: "Limon ve kekik ile marine edilmiş ızgara somon",
            calories: 400,
            ingredients: [
                { name: "Somon fileto", amount: "200 gr" },
                { name: "Limon", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" },
                { name: "Taze kekik", amount: "2-3 dal" }
            ]
        },
        {
            name: "Mantarlı Omlet",
            description: "Mantar ve yeşilliklerle hazırlanmış protein açısından zengin omlet",
            calories: 350,
            ingredients: [
                { name: "Yumurta", amount: "3 adet" },
                { name: "Mantar", amount: "100 gr" },
                { name: "Roka", amount: "1 demet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Hindi Füme Salata",
            description: "Hindi füme ve yeşilliklerle hazırlanmış besleyici salata",
            calories: 420,
            ingredients: [
                { name: "Hindi füme", amount: "150 gr" },
                { name: "Marul", amount: "4 yaprak" },
                { name: "Salatalık", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Izgara Levrek",
            description: "Fesleğenli ızgara levrek fileto",
            calories: 380,
            ingredients: [
                { name: "Levrek fileto", amount: "200 gr" },
                { name: "Fesleğen", amount: "1 demet" },
                { name: "Limon", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        // 500-1000 kcal arası yemekler
        {
            name: "Etli Mantar Sote",
            description: "Dana etli mantar sote",
            calories: 650,
            ingredients: [
                { name: "Dana eti", amount: "150 gr" },
                { name: "Mantar", amount: "200 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Izgara Balık",
            description: "Izgara somon ve ızgara sebze",
            calories: 850,
            ingredients: [
                { name: "Somon fileto", amount: "200 gr" },
                { name: "Brokoli", amount: "1 adet" },
                { name: "Kabak", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Tavuk Şiş",
            description: "Sebzeli tavuk şiş",
            calories: 580,
            ingredients: [
                { name: "Tavuk göğsü", amount: "200 gr" },
                { name: "Biber", amount: "2 adet" },
                { name: "Mantar", amount: "6 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Etli Patlıcan",
            description: "Kıymalı patlıcan yemeği",
            calories: 720,
            ingredients: [
                { name: "Dana kıyma", amount: "200 gr" },
                { name: "Patlıcan", amount: "2 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
            ]
        },
        {
            name: "Izgara Köfte",
            description: "Baharatlı ızgara köfte",
            calories: 680,
            ingredients: [
                { name: "Dana kıyma", amount: "250 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Maydanoz", amount: "1/2 demet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Tavuk Kapama",
            description: "Fırında baharatlı bütün tavuk but",
            calories: 720,
            ingredients: [
                { name: "Tavuk but", amount: "4 adet" },
                { name: "Sarımsak", amount: "4 diş" },
                { name: "Biberiye", amount: "2 dal" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Limon", amount: "1 adet" }
            ]
        },
        {
            name: "Mantarlı Dana Sote",
            description: "Dana eti ve mantar sote, karabiberli",
            calories: 680,
            ingredients: [
                { name: "Dana eti", amount: "200 gr" },
                { name: "Mantar", amount: "300 gr" },
                { name: "Tereyağı", amount: "30 gr" },
                { name: "Sarımsak", amount: "3 diş" }
            ]
        },
        {
            name: "Izgara Levrek",
            description: "Fesleğenli ızgara levrek fileto",
            calories: 550,
            ingredients: [
                { name: "Levrek fileto", amount: "300 gr" },
                { name: "Fesleğen", amount: "1 demet" },
                { name: "Limon", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Kuzu Pirzola",
            description: "Biberiyeli ızgara kuzu pirzola",
            calories: 850,
            ingredients: [
                { name: "Kuzu pirzola", amount: "300 gr" },
                { name: "Biberiye", amount: "3 dal" },
                { name: "Sarımsak", amount: "4 diş" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        // 1000-1500 kcal arası yemekler
        {
            name: "Karışık Izgara Et Tabağı",
            description: "Çeşitli ızgara etler ve yeşillikler",
            calories: 1200,
            ingredients: [
                { name: "Dana bonfile", amount: "200 gr" },
                { name: "Kuzu pirzola", amount: "200 gr" },
                { name: "Tavuk göğsü", amount: "200 gr" },
                { name: "Izgara sebze", amount: "200 gr" }
            ]
        },
        {
            name: "Izgara Somon ve Avokado Salatası",
            description: "Izgara somon balığı ve avokadolu yeşil salata",
            calories: 1100,
            ingredients: [
                { name: "Somon fileto", amount: "300 gr" },
                { name: "Avokado", amount: "2 adet" },
                { name: "Roka", amount: "2 demet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Dana Antrikot ve Izgara Sebze",
            description: "Izgara antrikot ve ızgara mevsim sebzeleri",
            calories: 1300,
            ingredients: [
                { name: "Dana antrikot", amount: "350 gr" },
                { name: "Brokoli", amount: "1 adet" },
                { name: "Kabak", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Kuzu Pirzola",
            description: "Fırında kuzu pirzola ve ızgara sebze",
            calories: 1250,
            ingredients: [
                { name: "Kuzu pirzola", amount: "400 gr" },
                { name: "Patlıcan", amount: "2 adet" },
                { name: "Biber", amount: "3 adet" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
            ]
        },
        {
            name: "Karışık Deniz Ürünleri",
            description: "Izgara deniz ürünleri tabağı",
            calories: 1180,
            ingredients: [
                { name: "Karides", amount: "200 gr" },
                { name: "Kalamar", amount: "200 gr" },
                { name: "Levrek fileto", amount: "200 gr" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
            ]
        },
        {
            name: "Dana Bonfile",
            description: "Mantarlı dana bonfile",
            calories: 1420,
            ingredients: [
                { name: "Dana bonfile", amount: "400 gr" },
                { name: "Mantar", amount: "200 gr" },
                { name: "Tereyağı", amount: "30 gr" },
                { name: "Brokoli", amount: "1 adet" }
            ]
        },
        {
            name: "Tavuk ve Hindi Karışık",
            description: "Izgara tavuk ve hindi etleri",
            calories: 1150,
            ingredients: [
                { name: "Tavuk göğsü", amount: "300 gr" },
                { name: "Hindi göğsü", amount: "300 gr" },
                { name: "Izgara sebze", amount: "300 gr" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
            ]
        },
        {
            name: "Etli Mantar Güveç",
            description: "Dana etli ve mantarlı güveç",
            calories: 1280,
            ingredients: [
                { name: "Dana kuşbaşı", amount: "400 gr" },
                { name: "Mantar", amount: "300 gr" },
                { name: "Biber", amount: "3 adet" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
            ]
        },
        {
            name: "Karışık Balık Tabağı",
            description: "Çeşitli ızgara balıklar",
            calories: 1350,
            ingredients: [
                { name: "Somon", amount: "200 gr" },
                { name: "Levrek", amount: "200 gr" },
                { name: "Çipura", amount: "200 gr" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
            ]
        },
        {
            name: "Dana Külbastı",
            description: "Izgara dana külbastı ve sebzeler",
            calories: 1480,
            ingredients: [
                { name: "Dana külbastı", amount: "400 gr" },
                { name: "Patlıcan", amount: "2 adet" },
                { name: "Biber", amount: "3 adet" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
            ]
        },
        {
            name: "Fırın Somon",
            calories: 400,
            description: "Limon ve kekik ile marine edilmiş fırın somon",
            dietType: "low-carb",
            ingredients: [
                { name: "Somon fileto", amount: "200gr" },
                { name: "Limon", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" },
                { name: "Taze kekik", amount: "2-3 dal" }
            ],
            recipe: [
                "Somonu marine edin",
                "Fırını ısıtın",
                "Somonu pişirin",
                "Limon ile servis yapın"
            ]
        },
        {
            name: "Sebzeli Tofu Güveç",
            description: "Baharatlı tofu ve karışık sebze güveç",
            calories: 1150,
            ingredients: [
                { name: "Sert tofu", amount: "400 gr" },
                { name: "Patlıcan", amount: "2 adet" },
                { name: "Mantar", amount: "300 gr" },
                { name: "Kabak", amount: "2 adet" },
                { name: "Domates", amount: "3 adet" },
                { name: "Zeytinyağı", amount: "5 yemek kaşığı" }
            ]
        },
        {
            name: "Nohutlu Sebze Pilav",
            description: "Basmati pirinç ve nohutlu sebzeli pilav",
            calories: 1280,
            ingredients: [
                { name: "Basmati pirinç", amount: "300 gr" },
                { name: "Nohut", amount: "250 gr" },
                { name: "Karışık sebze", amount: "400 gr" },
                { name: "Badem", amount: "50 gr" },
                { name: "Kuru üzüm", amount: "50 gr" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Kinoa Pilavı",
            description: "Kinoa ve sebzelerle hazırlanmış protein açısından zengin pilav",
            calories: 1100,
            ingredients: [
                { name: "Kinoa", amount: "300 gr" },
                { name: "Mantar", amount: "300 gr" },
                { name: "Brokoli", amount: "200 gr" },
                { name: "Havuç", amount: "2 adet" },
                { name: "Badem", amount: "50 gr" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Falafel Tabağı",
            description: "Falafel, humus ve ızgara sebzeler ile servis edilir",
            calories: 1250,
            ingredients: [
                { name: "Falafel", amount: "8 adet" },
                { name: "Humus", amount: "200 gr" },
                { name: "Patlıcan", amount: "2 adet" },
                { name: "Kabak", amount: "2 adet" },
                { name: "Domates", amount: "3 adet" },
                { name: "Tahin", amount: "50 gr" },
                { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
            ]
        },
        {
            name: "Sebzeli Vegan Lazanya",
            description: "Vegan peynirli sebze lazanya",
            calories: 1480,
            ingredients: [
                { name: "Lazanya yaprağı", amount: "400 gr" },
                { name: "Karışık sebze", amount: "600 gr" },
                { name: "Vegan beşamel", amount: "300 gr" },
                { name: "Vegan peynir", amount: "200 gr" }
            ]
        }
    ],
    "high-protein": [
        // 100-500 kcal arası yemekler
        {
            name: "Haşlanmış Yumurta",
            description: "Haşlanmış yumurta ve yeşillik",
            calories: 320,
            ingredients: [
                { name: "Yumurta", amount: "3 adet" },
                { name: "Marul", amount: "2 yaprak" },
                { name: "Domates", amount: "1 adet" }
            ]
        },
        {
            name: "Ton Balıklı Salata",
            description: "Protein açısından zengin ton balığı salatası",
            calories: 380,
            ingredients: [
                { name: "Ton balığı", amount: "150 gr" },
                { name: "Yumurta", amount: "1 adet" },
                { name: "Marul", amount: "4 yaprak" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Tavuk Göğsü Izgara",
            description: "Sade ızgara tavuk göğsü",
            calories: 450,
            ingredients: [
                { name: "Tavuk göğsü", amount: "200 gr" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" },
                { name: "Limon", amount: "1 adet" }
            ]
        },
        {
            name: "Proteinli Kahvaltı Tabağı",
            description: "Yumurta, peynir ve hindi füme ile protein ağırlıklı kahvaltı",
            calories: 400,
            ingredients: [
                { name: "Yumurta", amount: "2 adet" },
                { name: "Beyaz peynir", amount: "50 gr" },
                { name: "Hindi füme", amount: "2 dilim" },
                { name: "Domates", amount: "1 adet" }
            ]
        },
        {
            name: "Cottage Cheese ve Meyve",
            description: "Cottage peyniri ve taze meyveler",
            calories: 280,
            ingredients: [
                { name: "Cottage peyniri", amount: "150 gr" },
                { name: "Çilek", amount: "100 gr" },
                { name: "Yaban mersini", amount: "50 gr" },
                { name: "Badem", amount: "10 gr" }
            ]
        },
        {
            name: "Izgara Hindi Göğsü",
            description: "Baharatlı ızgara hindi göğsü ve yeşillikler",
            calories: 350,
            ingredients: [
                { name: "Hindi göğsü", amount: "150 gr" },
                { name: "Roka", amount: "1 demet" },
                { name: "Limon", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        {
            name: "Protein Shake",
            description: "Yumurta beyazı ve süt proteinli shake",
            calories: 290,
            ingredients: [
                { name: "Yumurta beyazı", amount: "4 adet" },
                { name: "Süt proteini tozu", amount: "30 gr" },
                { name: "Muz", amount: "1/2 adet" },
                { name: "Badem sütü", amount: "200 ml" }
            ]
        },
        {
            name: "Izgara Tofu",
            description: "Baharatlı ızgara tofu ve sebzeler",
            calories: 320,
            ingredients: [
                { name: "Sert tofu", amount: "200 gr" },
                { name: "Brokoli", amount: "100 gr" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
            ]
        },
        // 500-1000 kcal arası yemekler
        {
            name: "Etli Mercimek",
            description: "Dana etli yeşil mercimek yemeği",
            calories: 750,
            ingredients: [
                { name: "Dana eti", amount: "150 gr" },
                { name: "Yeşil mercimek", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Havuç", amount: "1 adet" }
            ]
        },
        {
            name: "Köfteli Mercimek",
            description: "Köfteli yeşil mercimek yemeği",
            calories: 850,
            ingredients: [
                { name: "Dana kıyma", amount: "200 gr" },
                { name: "Yeşil mercimek", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Bulgur", amount: "1/2 su bardağı" }
            ]
        },
        {
            name: "Tavuk Şiş",
            description: "Baharatlı tavuk şiş",
            calories: 680,
            ingredients: [
                { name: "Tavuk göğsü", amount: "250 gr" },
                { name: "Biber", amount: "2 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
            ]
        },
        {
            name: "Izgara Somon",
            description: "Izgara somon balığı",
            calories: 720,
            ingredients: [
                { name: "Somon fileto", amount: "200 gr" },
                { name: "Limon", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Taze kekik", amount: "1 tutam" }
            ]
        },
        {
            name: "Hindi Külbastı",
            description: "Izgara hindi külbastı",
            calories: 580,
            ingredients: [
                { name: "Hindi göğsü", amount: "250 gr" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Baharatlar", amount: "1 yemek kaşığı" },
                { name: "Brokoli", amount: "200 gr" }
            ]
        },
        {
            name: "Izgara Biftek",
            description: "Protein açısından zengin ızgara dana biftek",
            calories: 850,
            ingredients: [
                { name: "Dana biftek", amount: "250 gr" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Karabiber", amount: "1 tatlı kaşığı" },
                { name: "Deniz tuzu", amount: "1 tatlı kaşığı" }
            ]
        },
        {
            name: "Hindi Füme ve Yumurta",
            description: "Hindi füme ve yumurta ile protein açısından zengin öğün",
            calories: 650,
            ingredients: [
                { name: "Hindi füme", amount: "200 gr" },
                { name: "Yumurta", amount: "3 adet" },
                { name: "Avokado", amount: "1/2 adet" },
                { name: "Roka", amount: "1 demet" }
            ]
        },
        {
            name: "Ton Balıklı Kinoa",
            description: "Ton balığı ve kinoa ile protein açısından zengin salata",
            calories: 700,
            ingredients: [
                { name: "Ton balığı", amount: "200 gr" },
                { name: "Kinoa", amount: "100 gr" },
                { name: "Avokado", amount: "1/2 adet" },
                { name: "Roka", amount: "1 demet" }
            ]
        },
        // 1000-1500 kcal arası yemekler
        {
            name: "Protein Zengini Akşam Tabağı",
            description: "Yüksek proteinli et ve süt ürünleri kombinasyonu",
            calories: 1200,
            ingredients: [
                { name: "Dana antrikot", amount: "300 gr" },
                { name: "Cottage peyniri", amount: "200 gr" },
                { name: "Yumurta", amount: "3 adet" },
                { name: "Yeşil salata", amount: "1 porsiyon" }
            ]
        },
        {
            name: "Tavuk Göğsü ve Kinoa Tabağı",
            description: "Izgara tavuk göğsü ve kinoa salatası",
            calories: 1100,
            ingredients: [
                { name: "Tavuk göğsü", amount: "300 gr" },
                { name: "Kinoa", amount: "1.5 su bardağı" },
                { name: "Yumurta", amount: "2 adet" },
                { name: "Nohut", amount: "1 su bardağı" }
            ]
        },
        {
            name: "Etli Mercimek Yemeği",
            description: "Dana etli yeşil mercimek yemeği",
            calories: 1250,
            ingredients: [
                { name: "Dana kuşbaşı", amount: "250 gr" },
                { name: "Yeşil mercimek", amount: "2 su bardağı" },
                { name: "Soğan", amount: "2 adet" },
                { name: "Havuç", amount: "2 adet" }
            ]
        },
        {
            name: "Karışık Izgara Et",
            description: "Çeşitli ızgara etler tabağı",
            calories: 1450,
            ingredients: [
                { name: "Dana bonfile", amount: "200 gr" },
                { name: "Kuzu pirzola", amount: "200 gr" },
                { name: "Tavuk göğsü", amount: "200 gr" },
                { name: "Köfte", amount: "200 gr" }
            ]
        },
        {
            name: "Deniz Ürünleri Tabağı",
            description: "Protein açısından zengin deniz ürünleri",
            calories: 1180,
            ingredients: [
                { name: "Somon", amount: "200 gr" },
                { name: "Karides", amount: "200 gr" },
                { name: "Kalamar", amount: "150 gr" },
                { name: "Levrek", amount: "150 gr" }
            ]
        },
        {
            name: "Protein Bowl",
            description: "Yüksek proteinli karışık tabak",
            calories: 1350,
            ingredients: [
                { name: "Tavuk göğsü", amount: "200 gr" },
                { name: "Kinoa", amount: "100 gr" },
                { name: "Nohut", amount: "200 gr" },
                { name: "Yumurta", amount: "3 adet" }
            ]
        },
        {
            name: "Et ve Baklagil Tabağı",
            description: "Dana eti ve mercimek kombinasyonu",
            calories: 1280,
            ingredients: [
                { name: "Dana eti", amount: "250 gr" },
                { name: "Yeşil mercimek", amount: "200 gr" },
                { name: "Nohut", amount: "200 gr" },
                { name: "Bulgur", amount: "100 gr" }
            ]
        },
        {
            name: "Sporcu Tabağı",
            description: "Yüksek proteinli sporcu menüsü",
            calories: 1420,
            ingredients: [
                { name: "Tavuk göğsü", amount: "300 gr" },
                { name: "Yumurta beyazı", amount: "6 adet" },
                { name: "Ton balığı", amount: "150 gr" },
                { name: "Cottage peyniri", amount: "200 gr" }
            ]
        },
        {
            name: "Protein Mix",
            description: "Karışık protein kaynakları",
            calories: 1380,
            ingredients: [
                { name: "Hindi göğsü", amount: "200 gr" },
                { name: "Somon", amount: "150 gr" },
                { name: "Yumurta", amount: "3 adet" },
                { name: "Mercimek", amount: "200 gr" }
            ]
        },
        {
            name: "Etli Fasulye",
            description: "Dana etli kuru fasulye",
            calories: 1480,
            ingredients: [
                { name: "Dana eti", amount: "300 gr" },
                { name: "Kuru fasulye", amount: "300 gr" },
                { name: "Soğan", amount: "2 adet" },
                { name: "Domates", amount: "3 adet" }
            ]
        },
        {
            name: "Izgara Biftek",
            calories: 550,
            description: "Protein açısından zengin ızgara dana biftek",
            dietType: "high-protein",
            ingredients: [
                { name: "Dana biftek", amount: "200gr" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" },
                { name: "Karabiber", amount: "1 tatlı kaşığı" },
                { name: "Deniz tuzu", amount: "1 tatlı kaşığı" }
            ],
            recipe: [
                "Bifteği oda sıcaklığına getirin",
                "Marine edin",
                "Izgarayı ısıtın",
                "İstediğiniz pişme derecesine göre pişirin",
                "5 dakika dinlendirip servis yapın"
            ]
        }
    ]
}; 
