// Genişletilmiş yemek veritabanı (kalori aralıklarına göre güncellendi)
const mealDatabase = {
    balanced: [
        {
            name: "Nohutlu Semizotu Salatası",
            description: "Kırmızı soğan, nohut ve zeytinyağı ile hafif bir semizotu salatası",
            calories: 320,
            ingredients: [
                { name: "Semizotu", amount: "1 demet" },
                { name: "Haşlanmış nohut", amount: "1 su bardağı" },
                { name: "Kırmızı soğan", amount: "1/2 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" },
            ]
        },
        {
            name: "Yoğurtlu Kabak Sote",
            description: "Sotelenmiş kabak ve yoğurt sos ile hafif öğün",
            calories: 380,
            ingredients: [
                { name: "Kabak", amount: "2 adet" },
                { name: "Yoğurt", amount: "150 gr" },
                { name: "Sarımsak", amount: "1 diş" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" },
            ]
        },
        {
            name: "Fırınlanmış Sebzeli Omlet",
            description: "Ispanak ve biberle hazırlanan hafif fırın omlet",
            calories: 450,
            ingredients: [
                { name: "Yumurta", amount: "2 adet" },
                { name: "Ispanak", amount: "100 gr" },
                { name: "Kırmızı biber", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" },
            ]
        },
        {
            name: "Tavuklu Sebzeli Güveç",
            description: "Tavuk göğsü ve sebzelerle hazırlanan ev yapımı güveç",
            calories: 650,
            ingredients: [
                { name: "Tavuk göğsü", amount: "200 gr" },
                { name: "Patates", amount: "1 adet" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Domates", amount: "1 adet" },
            ]
        },
        {
            name: "Kıymalı Kabak Dolması",
            description: "Kıymalı iç harcı ile hazırlanan kabak dolması",
            calories: 720,
            ingredients: [
                { name: "Kabak", amount: "4 adet" },
                { name: "Dana kıyma", amount: "150 gr" },
                { name: "Pirinç", amount: "1/2 su bardağı" },
                { name: "Domates sosu", amount: "1 su bardağı" },
            ]
        },
        {
            name: "Fırın Makarna ve Tavuk",
            description: "Fırında beşamel soslu makarna ve tavuk parçaları",
            calories: 800,
            ingredients: [
                { name: "Makarna", amount: "200 gr" },
                { name: "Tavuk göğsü", amount: "150 gr" },
                { name: "Beşamel sos", amount: "150 gr" },
                { name: "Kaşar peyniri", amount: "50 gr" },
            ]
        },
        {
            name: "Kuzu İncik ve Sebzeli Pilav",
            description: "Fırında pişmiş kuzu incik ve sebzeli pilav",
            calories: 1200,
            ingredients: [
                { name: "Kuzu incik", amount: "250 gr" },
                { name: "Pirinç", amount: "1 su bardağı" },
                { name: "Havuç", amount: "2 adet" },
                { name: "Bezelye", amount: "1 su bardağı" },
            ]
        },
        {
            name: "Fırında Soslu Kanat ve Patates",
            description: "Baharatlı sosla marine edilmiş tavuk kanadı ve patates",
            calories: 1350,
            ingredients: [
                { name: "Tavuk kanat", amount: "400 gr" },
                { name: "Patates", amount: "2 adet" },
                { name: "Barbekü sos", amount: "100 gr" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
            ]
        },
        {
            name: "Dana Rosto ve Sebzeli Garnitür",
            description: "Dana rosto ve fırınlanmış sebze garnitürü",
            calories: 1450,
            ingredients: [
                { name: "Dana rosto", amount: "300 gr" },
                { name: "Patates", amount: "2 adet" },
                { name: "Havuç", amount: "2 adet" },
                { name: "Kereviz", amount: "1 adet" },
            ]
        },
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
            description: "Kırmızı mercimek, soğan ve baharatlarla hazırlanan geleneksel Türk çorbası",
            calories: 250,
            ingredients: [
                { name: "Kırmızı mercimek", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Un", amount: "1 yemek kaşığı" },
                { name: "Tereyağı", amount: "1 yemek kaşığı" },
                { name: "Karabiber", amount: "1 çay kaşığı" }
            ]
        },
        {
            name: "Ezogelin Çorbası",
            description: "Kırmızı mercimek, pirinç ve baharatlarla hazırlanan geleneksel Türk çorbası",
            calories: 280,
            ingredients: [
                { name: "Kırmızı mercimek", amount: "1 su bardağı" },
                { name: "Pirinç", amount: "1/2 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Domates salçası", amount: "1 yemek kaşığı" },
                { name: "Tereyağı", amount: "1 yemek kaşığı" },
                { name: "Nane", amount: "1 tatlı kaşığı" }
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
        },
        {
            name: "Yayla Çorbası",
            description: "Yoğurt, pirinç ve nane ile hazırlanan geleneksel Türk çorbası",
            calories: 260,
            ingredients: [
                { name: "Yoğurt", amount: "2 su bardağı" },
                { name: "Pirinç", amount: "1/2 su bardağı" },
                { name: "Un", amount: "1 yemek kaşığı" },
                { name: "Tereyağı", amount: "1 yemek kaşığı" },
                { name: "Nane", amount: "1 tatlı kaşığı" },
                { name: "Yumurta", amount: "1 adet" }
            ]
        },
        {
            name: "Bolonez Soslu Makarna",
            description: "Kıymalı domates soslu geleneksel İtalyan makarnası",
            calories: 550,
            ingredients: [
                { name: "Spagetti", amount: "250 gr" },
                { name: "Dana kıyma", amount: "200 gr" },
                { name: "Domates sosu", amount: "200 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Parmesan peyniri", amount: "50 gr" }
            ]
        },
        {
            name: "Karidesli Makarna",
            description: "Karides ve sarımsaklı nefis makarna",
            calories: 480,
            ingredients: [
                { name: "Linguine", amount: "250 gr" },
                { name: "Karides", amount: "300 gr" },
                { name: "Sarımsak", amount: "3 diş" },
                { name: "Zeytinyağı", amount: "1/4 su bardağı" },
                { name: "Limon", amount: "1 adet" },
                { name: "Kırmızı biber", amount: "1 adet" },
                { name: "Maydanoz", amount: "1/2 demet" }
            ]
        },
        {
            name: "Kıymalı Lazanya",
            description: "Kıymalı ve beşamel soslu geleneksel İtalyan lazanyası",
            calories: 650,
            ingredients: [
                { name: "Lazanya yaprağı", amount: "250 gr" },
                { name: "Dana kıyma", amount: "300 gr" },
                { name: "Domates sosu", amount: "300 gr" },
                { name: "Beşamel sos", amount: "300 ml" },
                { name: "Kaşar peyniri", amount: "150 gr" },
                { name: "Mozarella", amount: "100 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Sarımsak", amount: "2 diş" }
            ]
        },
        {
            name: "Etli Ravioli",
            description: "Kıymalı iç harcı ve domates soslu ravioli",
            calories: 580,
            ingredients: [
                { name: "Ravioli hamuru", amount: "300 gr" },
                { name: "Dana kıyma", amount: "200 gr" },
                { name: "Ricotta peyniri", amount: "150 gr" },
                { name: "Domates sosu", amount: "200 gr" },
                { name: "Parmesan peyniri", amount: "50 gr" },
                { name: "Yumurta", amount: "1 adet" },
                { name: "Taze kekik", amount: "1/2 demet" }
            ]
        },
        {
            name: "Tavuk Fajita",
            description: "Biber ve soğanlı tavuk fajita",
            calories: 450,
            ingredients: [
                { name: "Tavuk göğüs", amount: "300 gr" },
                { name: "Kırmızı biber", amount: "1 adet" },
                { name: "Sarı biber", amount: "1 adet" },
                { name: "Yeşil biber", amount: "1 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Tortilla ekmeği", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Fajita baharatı", amount: "1 tatlı kaşığı" }
            ]
        },
        {
            name: "Tavuk Çökertme",
            description: "Patates ve tavuklu geleneksel çökertme",
            calories: 520,
            ingredients: [
                { name: "Tavuk göğüs", amount: "300 gr" },
                { name: "Patates", amount: "3 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Biber", amount: "2 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Sarımsak", amount: "3 diş" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" },
                { name: "Taze kekik", amount: "1/2 demet" }
            ]
        },
        {
            name: "Kekikli Tavuk Bonfile",
            description: "Fırında kekikli tavuk bonfile",
            calories: 380,
            ingredients: [
                { name: "Tavuk bonfile", amount: "250 gr" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Taze kekik", amount: "1/2 demet" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Limon suyu", amount: "1 adet" },
                { name: "Taze biberiye", amount: "1 dal" },
                { name: "Tuz ve karabiber", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Tavuk Şiş",
            description: "Marine edilmiş tavuk şiş",
            calories: 420,
            ingredients: [
                { name: "Tavuk göğüs", amount: "300 gr" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Yoğurt", amount: "2 yemek kaşığı" },
                { name: "Sarımsak", amount: "3 diş" },
                { name: "Kırmızı biber", amount: "1 adet" },
                { name: "Yeşil biber", amount: "1 adet" },
                { name: "Taze kekik", amount: "1/2 demet" }
            ]
        },
        {
            name: "Tavuk Sote",
            description: "Sebzeli tavuk sote",
            calories: 380,
            ingredients: [
                { name: "Tavuk göğüs", amount: "300 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Biber", amount: "2 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Taze kekik", amount: "1/2 demet" }
            ]
        },
        {
            name: "Tavuk Döner",
            description: "Geleneksel tavuk döner",
            calories: 450,
            ingredients: [
                { name: "Tavuk göğüs", amount: "300 gr" },
                { name: "Yoğurt", amount: "2 yemek kaşığı" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Sarımsak", amount: "3 diş" },
                { name: "Taze kekik", amount: "1/2 demet" },
                { name: "Kırmızı biber", amount: "1 tatlı kaşığı" },
                { name: "Kimyon", amount: "1 tatlı kaşığı" }
            ]
        },
        {
            name: "Tavuklu Pilav",
            description: "Tavuklu ve sebzeli pilav",
            calories: 480,
            ingredients: [
                { name: "Tavuk göğüs", amount: "250 gr" },
                { name: "Pirinç", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Bezelye", amount: "1/2 su bardağı" },
                { name: "Tereyağı", amount: "1 yemek kaşığı" },
                { name: "Tavuk suyu", amount: "2 su bardağı" }
            ]
        },
        {
            name: "Tavuklu Salata",
            description: "Izgara tavuklu yeşil salata",
            calories: 350,
            ingredients: [
                { name: "Tavuk göğüs", amount: "200 gr" },
                { name: "Marul", amount: "1/2 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Salatalık", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Limon suyu", amount: "1 adet" },
                { name: "Taze kekik", amount: "1/2 demet" }
            ]
        },
        {
            name: "Fırında Tavuk Kanat",
            description: "Baharatlı fırında tavuk kanat",
            calories: 420,
            ingredients: [
                { name: "Tavuk kanat", amount: "500 gr" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Sarımsak", amount: "3 diş" },
                { name: "Kırmızı biber", amount: "1 tatlı kaşığı" },
                { name: "Kekik", amount: "1 tatlı kaşığı" },
                { name: "Karabiber", amount: "1 tatlı kaşığı" },
                { name: "Tuz", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Fırında Tavuk But",
            description: "Fırında pişmiş tavuk but",
            calories: 480,
            ingredients: [
                { name: "Tavuk but", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Sarımsak", amount: "3 diş" },
                { name: "Kekik", amount: "1 tatlı kaşığı" },
                { name: "Biberiye", amount: "1 tatlı kaşığı" },
                { name: "Limon suyu", amount: "1 adet" },
                { name: "Tuz ve karabiber", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Fırında Tavuk Göğüs",
            description: "Fırında pişmiş tavuk göğüs",
            calories: 350,
            ingredients: [
                { name: "Tavuk göğüs", amount: "300 gr" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Kekik", amount: "1 tatlı kaşığı" },
                { name: "Limon suyu", amount: "1 adet" },
                { name: "Taze biberiye", amount: "1 dal" },
                { name: "Tuz ve karabiber", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Lahmacun",
            description: "İnce hamur üzerine kıymalı harç",
            calories: 450,
            ingredients: [
                { name: "Hamur", amount: "200 gr" },
                { name: "Dana kıyma", amount: "200 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Domates", amount: "2 adet" },
                { name: "Biber salçası", amount: "1 yemek kaşığı" },
                { name: "Maydanoz", amount: "1/2 demet" }
            ]
        },
        {
            name: "Ispanaklı Börek",
            description: "Yufka ile hazırlanmış ıspanaklı börek",
            calories: 380,
            ingredients: [
                { name: "Yufka", amount: "3 adet" },
                { name: "Ispanak", amount: "500 gr" },
                { name: "Peynir", amount: "200 gr" },
                { name: "Yumurta", amount: "2 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Tereyağı", amount: "50 gr" }
            ]
        },
        {
            name: "Kıymalı Börek",
            description: "Yufka ile hazırlanmış kıymalı börek",
            calories: 420,
            ingredients: [
                { name: "Yufka", amount: "3 adet" },
                { name: "Dana kıyma", amount: "300 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Yumurta", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Tereyağı", amount: "50 gr" },
                { name: "Maydanoz", amount: "1/2 demet" }
            ]
        },
        {
            name: "Peynirli Börek",
            description: "Yufka ile hazırlanmış peynirli börek",
            calories: 400,
            ingredients: [
                { name: "Yufka", amount: "3 adet" },
                { name: "Beyaz peynir", amount: "300 gr" },
                { name: "Yumurta", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Tereyağı", amount: "50 gr" },
                { name: "Maydanoz", amount: "1/2 demet" }
            ]
        },
        {
            name: "Su Böreği",
            description: "Haşlanmış yufka ile hazırlanan su böreği",
            calories: 350,
            ingredients: [
                { name: "Yufka", amount: "3 adet" },
                { name: "Beyaz peynir", amount: "300 gr" },
                { name: "Yumurta", amount: "2 adet" },
                { name: "Süt", amount: "1 su bardağı" },
                { name: "Tereyağı", amount: "50 gr" },
                { name: "Tuz", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Tavuklu Sezar Salata",
            description: "Marul, tavuk göğüs, kruton ve sezar soslu salata",
            calories: 380,
            ingredients: [
                { name: "Tavuk göğüs", amount: "200 gr" },
                { name: "Marul", amount: "1/2 adet" },
                { name: "Kruton", amount: "50 gr" },
                { name: "Parmesan peyniri", amount: "30 gr" },
                { name: "Sezar sos", amount: "2 yemek kaşığı" },
                { name: "Limon suyu", amount: "1 adet" }
            ]
        },
        {
            name: "Ton Balıklı Salata",
            description: "Ton balığı, marul ve sebzelerle hazırlanan salata",
            calories: 350,
            ingredients: [
                { name: "Ton balığı", amount: "150 gr" },
                { name: "Marul", amount: "1/2 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Salatalık", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Limon suyu", amount: "1 adet" }
            ]
        },
        {
            name: "Nohutlu Tavuk Salatası",
            description: "Tavuk, nohut ve sebzelerle hazırlanan salata",
            calories: 420,
            ingredients: [
                { name: "Tavuk göğüs", amount: "200 gr" },
                { name: "Haşlanmış nohut", amount: "1 su bardağı" },
                { name: "Marul", amount: "1/2 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Limon suyu", amount: "1 adet" }
            ]
        },
        {
            name: "Patates Salatası",
            description: "Haşlanmış patates, mayonez ve sebzelerle hazırlanan salata",
            calories: 320,
            ingredients: [
                { name: "Patates", amount: "3 adet" },
                { name: "Mayonez", amount: "2 yemek kaşığı" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Kornişon turşu", amount: "3 adet" },
                { name: "Yeşil soğan", amount: "2 adet" },
                { name: "Tuz", amount: "Yeteri kadar" },
                { name: "Karabiber", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Mantı",
            description: "Kıymalı hamur yemeği, yoğurt ve sos ile servis edilir",
            calories: 480,
            ingredients: [
                { name: "Hamur", amount: "300 gr" },
                { name: "Dana kıyma", amount: "200 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Yoğurt", amount: "200 gr" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Tereyağı", amount: "50 gr" },
                { name: "Nane", amount: "1 tatlı kaşığı" },
                { name: "Kırmızı biber", amount: "1 tatlı kaşığı" }
            ]
        },
        {
            name: "İçli Köfte",
            description: "Bulgur hamuru içinde kıymalı iç harç",
            calories: 420,
            ingredients: [
                { name: "İnce bulgur", amount: "2 su bardağı" },
                { name: "Dana kıyma", amount: "300 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Antep fıstığı", amount: "50 gr" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Biber salçası", amount: "1 yemek kaşığı" },
                { name: "Taze kekik", amount: "1/2 demet" }
            ]
        },
        {
            name: "Etli Yaprak Sarma",
            description: "Asma yaprağı içinde kıymalı iç harç",
            calories: 380,
            ingredients: [
                { name: "Asma yaprağı", amount: "20 adet" },
                { name: "Dana kıyma", amount: "200 gr" },
                { name: "Pirinç", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Nane", amount: "1 tatlı kaşığı" },
                { name: "Karabiber", amount: "1 tatlı kaşığı" }
            ]
        },
        {
            name: "Etli Biber Dolması",
            description: "Biber içinde kıymalı iç harç",
            calories: 350,
            ingredients: [
                { name: "Dolmalık biber", amount: "6 adet" },
                { name: "Dana kıyma", amount: "200 gr" },
                { name: "Pirinç", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Nane", amount: "1 tatlı kaşığı" },
                { name: "Karabiber", amount: "1 tatlı kaşığı" }
            ]
        },
        {
            name: "Etli Patlıcan Dolması",
            description: "Patlıcan içinde kıymalı iç harç",
            calories: 380,
            ingredients: [
                { name: "Patlıcan", amount: "6 adet" },
                { name: "Dana kıyma", amount: "200 gr" },
                { name: "Pirinç", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Nane", amount: "1 tatlı kaşığı" },
                { name: "Karabiber", amount: "1 tatlı kaşığı" }
            ]
        },
        {
            name: "İzmir Köfte",
            description: "Patates ve domates soslu köfte",
            calories: 450,
            ingredients: [
                { name: "Kıyma", amount: "300 gr" },
                { name: "Patates", amount: "3 adet" },
                { name: "Domates", amount: "3 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Taze kekik", amount: "1/2 demet" }
            ]
        },
        {
            name: "Sebzeli Kağıt Kebabı",
            description: "Kağıt içinde kıymalı ve sebzeli kebab",
            calories: 480,
            ingredients: [
                { name: "Dana kıyma", amount: "300 gr" },
                { name: "Patates", amount: "2 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Biber", amount: "2 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Taze kekik", amount: "1/2 demet" }
            ]
        },
        {
            name: "Fırında Kıymalı Patates",
            description: "Fırında pişmiş kıymalı ve patatesli yemek",
            calories: 420,
            ingredients: [
                { name: "Dana kıyma", amount: "300 gr" },
                { name: "Patates", amount: "4 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Tereyağı", amount: "50 gr" },
                { name: "Taze kekik", amount: "1/2 demet" }
            ]
        },
        {
            name: "Karnıyarık",
            description: "Patlıcan içinde kıymalı iç harç",
            calories: 450,
            ingredients: [
                { name: "Patlıcan", amount: "6 adet" },
                { name: "Dana kıyma", amount: "300 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Domates", amount: "2 adet" },
                { name: "Biber", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "3 yemek kaşığı" },
                { name: "Taze kekik", amount: "1/2 demet" }
            ]
        },
        {
            name: "Mücver",
            description: "Kabak, yumurta ve unla hazırlanan geleneksel Türk yemeği",
            calories: 380,
            ingredients: [
                { name: "Kabak", amount: "3 adet" },
                { name: "Yumurta", amount: "2 adet" },
                { name: "Un", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Maydanoz", amount: "1/2 demet" },
                { name: "Dereotu", amount: "1/2 demet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Tuz ve karabiber", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Ispanaklı Mücver",
            description: "Ispanak, yumurta ve unla hazırlanan mücver",
            calories: 350,
            ingredients: [
                { name: "Ispanak", amount: "500 gr" },
                { name: "Yumurta", amount: "2 adet" },
                { name: "Un", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Maydanoz", amount: "1/2 demet" },
                { name: "Dereotu", amount: "1/2 demet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Tuz ve karabiber", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Patlıcanlı Mücver",
            description: "Patlıcan, yumurta ve unla hazırlanan mücver",
            calories: 360,
            ingredients: [
                { name: "Patlıcan", amount: "3 adet" },
                { name: "Yumurta", amount: "2 adet" },
                { name: "Un", amount: "1 su bardağı" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Maydanoz", amount: "1/2 demet" },
                { name: "Dereotu", amount: "1/2 demet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Tuz ve karabiber", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Soslu Somon Fileto",
            description: "Fırında pişmiş soslu somon fileto",
            calories: 420,
            ingredients: [
                { name: "Somon fileto", amount: "300 gr" },
                { name: "Limon suyu", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Sarımsak", amount: "2 diş" },
                { name: "Taze kekik", amount: "1/2 demet" },
                { name: "Taze biberiye", amount: "1 dal" },
                { name: "Tuz ve karabiber", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Fırında Sebzeli Somon",
            description: "Sebzelerle fırında pişmiş somon",
            calories: 450,
            ingredients: [
                { name: "Somon fileto", amount: "300 gr" },
                { name: "Patates", amount: "2 adet" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Biber", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Limon suyu", amount: "1 adet" },
                { name: "Taze kekik", amount: "1/2 demet" }
            ]
        },
        {
            name: "Patates Püreli Rosto",
            description: "Fırında pişmiş dana rosto, patates püresi ve sebzelerle servis edilir",
            calories: 650,
            ingredients: [
                { name: "Dana rosto", amount: "300 gr" },
                { name: "Patates", amount: "4 adet" },
                { name: "Süt", amount: "1 su bardağı" },
                { name: "Tereyağı", amount: "50 gr" },
                { name: "Havuç", amount: "2 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Sarımsak", amount: "3 diş" },
                { name: "Taze kekik", amount: "1/2 demet" },
                { name: "Tuz ve karabiber", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Zeytinyağlı Bezelye Yemeği",
            description: "Taze bezelye, havuç ve soğanla hazırlanan geleneksel Türk yemeği",
            calories: 320,
            ingredients: [
                { name: "Taze bezelye", amount: "500 gr" },
                { name: "Havuç", amount: "2 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Domates", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "1/2 su bardağı" },
                { name: "Şeker", amount: "1 çay kaşığı" },
                { name: "Tuz", amount: "Yeteri kadar" },
                { name: "Su", amount: "1 su bardağı" }
            ]
        },
        {
            name: "Mantar Güveç",
            description: "Fırında pişmiş mantar, sebze ve baharatlarla hazırlanan güveç",
            calories: 280,
            ingredients: [
                { name: "Kültür mantarı", amount: "500 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Sarımsak", amount: "3 diş" },
                { name: "Domates", amount: "2 adet" },
                { name: "Biber", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Taze kekik", amount: "1 dal" },
                { name: "Tuz ve karabiber", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Mantarlı Omlet",
            description: "Mantar, soğan ve baharatlarla hazırlanan protein zengini omlet",
            calories: 320,
            ingredients: [
                { name: "Yumurta", amount: "3 adet" },
                { name: "Kültür mantarı", amount: "200 gr" },
                { name: "Soğan", amount: "1/2 adet" },
                { name: "Zeytinyağı", amount: "1 yemek kaşığı" },
                { name: "Tuz ve karabiber", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Mantarlı Pilav",
            description: "Mantar ve sebzelerle hazırlanan lezzetli pilav",
            calories: 380,
            ingredients: [
                { name: "Pirinç", amount: "1 su bardağı" },
                { name: "Kültür mantarı", amount: "300 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Tuz", amount: "Yeteri kadar" }
            ]
        },
        {
            name: "Mantarlı Tavuk Sote",
            description: "Tavuk, mantar ve sebzelerle hazırlanan sağlıklı sote",
            calories: 420,
            ingredients: [
                { name: "Tavuk göğsü", amount: "300 gr" },
                { name: "Kültür mantarı", amount: "300 gr" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Biber", amount: "2 adet" },
                { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
                { name: "Tuz ve karabiber", amount: "Yeteri kadar" }
            ]
        }
    ],
    vegetarian: [
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
        },
        {
            name: "Pirinçli Tavuk Çorbası",
            description: "Tavuk suyu, pirinç ve sebzelerle hazırlanan besleyici çorba",
            calories: 320,
            ingredients: [
                { name: "Tavuk göğsü", amount: "200 gr" },
                { name: "Pirinç", amount: "1/2 su bardağı" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Tereyağı", amount: "1 yemek kaşığı" },
                { name: "Karabiber", amount: "1 çay kaşığı" }
            ]
        },
        {
            name: "Kremalı Tavuk Çorbası",
            description: "Tavuk, krema ve sebzelerle hazırlanan zengin çorba",
            calories: 350,
            ingredients: [
                { name: "Tavuk göğsü", amount: "250 gr" },
                { name: "Krema", amount: "200 ml" },
                { name: "Havuç", amount: "1 adet" },
                { name: "Soğan", amount: "1 adet" },
                { name: "Tereyağı", amount: "1 yemek kaşığı" },
                { name: "Un", amount: "1 yemek kaşığı" },
                { name: "Karabiber", amount: "1 çay kaşığı" }
            ]
        }
    ]
}; 
