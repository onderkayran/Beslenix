const balancedMeals = [
    {
        name: "Kıymalı Kabak Dolması",
        description: "Kıymalı iç harcı ile hazırlanan kabak dolması",
        calories: 720,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Kabak", amount: "4 adet" },
            { name: "Dana kıyma", amount: "150 gr" },
            { name: "Pirinç", amount: "1/2 su bardağı" },
            { name: "Domates sosu", amount: "1 su bardağı" }
        ]
    },
    {
        name: "Fırın Makarna ve Tavuk",
        description: "Fırında beşamel soslu makarna ve tavuk parçaları",
        calories: 800,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Makarna", amount: "200 gr" },
            { name: "Tavuk göğsü", amount: "150 gr" },
            { name: "Beşamel sos", amount: "150 gr" },
            { name: "Kaşar peyniri", amount: "50 gr" }
        ]
    },
    {
        name: "Etli Taze Fasulye",
        description: "Zeytinyağlı taze fasulye ve et sote",
        calories: 650,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Dana eti", amount: "100 gr" },
            { name: "Taze fasulye", amount: "250 gr" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Domates", amount: "2 adet" }
        ]
    },
    {
        name: "Tavuklu Pilav",
        description: "Tavuk göğsü ve pirinç pilavı ile hazırlanan zengin dengeli yemek",
        calories: 1250,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "300 gr" },
            { name: "Pirinç", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Kıymalı Ispanak",
        description: "Kıymalı ıspanak yemeği ve bulgur pilavı",
        calories: 580,
        dietType: "dengeli",
        calorieRange: "orta",
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
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Dana kuşbaşı", amount: "150 gr" },
            { name: "Bezelye", amount: "300 gr" },
            { name: "Havuç", amount: "2 adet" },
            { name: "Patates", amount: "1 adet" }
        ]
    },
    {
        name: "Tavuklu Salata",
        description: "Izgara tavuk göğsü ve yeşilliklerle hazırlanan dengeli salata",
        calories: 320,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "100 gr" },
            { name: "Marul", amount: "2 yaprak" },
            { name: "Salatalık", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Ton Balıklı Salata",
        description: "Ton balığı ve sebzelerle hazırlanan dengeli salata",
        calories: 280,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Ton balığı", amount: "80 gr" },
            { name: "Marul", amount: "2 yaprak" },
            { name: "Domates", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Omlet",
        description: "Sebzeli ve protein zengini omlet",
        calories: 350,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Yumurta", amount: "2 adet" },
            { name: "Mantar", amount: "100 gr" },
            { name: "Biber", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Köfte",
        description: "Dana kıymadan hazırlanan dengeli köfte",
        calories: 420,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Dana kıyma", amount: "120 gr" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Sarımsak", amount: "2 diş" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuk Şiş",
        description: "Marine edilmiş tavuk şiş",
        calories: 380,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "120 gr" },
            { name: "Biber", amount: "1 adet" },
            { name: "Domates", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Yoğurtlu Tavuk",
        description: "Yoğurt soslu tavuk göğsü",
        calories: 350,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "100 gr" },
            { name: "Yoğurt", amount: "100 gr" },
            { name: "Sarımsak", amount: "2 diş" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Balık",
        description: "Fırında pişirilmiş balık ve sebzeler",
        calories: 320,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Levrek", amount: "120 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Brokoli", amount: "100 gr" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Yulaflı Tavuk",
        description: "Yulaf kaplama tavuk göğsü",
        calories: 380,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "120 gr" },
            { name: "Yulaf", amount: "30 gr" },
            { name: "Yumurta", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Köfte",
        description: "Az yağlı ızgara köfte",
        calories: 350,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Dana kıyma", amount: "120 gr" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Sarımsak", amount: "2 diş" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Ton Balıklı Kinoa",
        description: "Ton balığı ve kinoa karışımı",
        calories: 420,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Ton balığı", amount: "80 gr" },
            { name: "Kinoa", amount: "50 gr" },
            { name: "Salatalık", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Sebze",
        description: "Tavuk ve sebze karışımı",
        calories: 380,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "120 gr" },
            { name: "Brokoli", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Yumurtalı Sebze",
        description: "Sebzeli yumurta karışımı",
        calories: 320,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Yumurta", amount: "2 adet" },
            { name: "Ispanak", amount: "100 gr" },
            { name: "Mantar", amount: "100 gr" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Balık",
        description: "Izgara balık ve sebzeler",
        calories: 350,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Levrek", amount: "120 gr" },
            { name: "Biber", amount: "1 adet" },
            { name: "Domates", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Salata",
        description: "Tavuk ve yeşillik salatası",
        calories: 380,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "120 gr" },
            { name: "Roka", amount: "1 demet" },
            { name: "Domates", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Ton Balıklı Salata",
        description: "Ton balığı ve yeşillik salatası",
        calories: 320,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Ton balığı", amount: "80 gr" },
            { name: "Marul", amount: "2 yaprak" },
            { name: "Salatalık", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Pilav",
        description: "Sebzeli ve protein zengini pilav",
        calories: 420,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Pirinç", amount: "1 su bardağı" },
            { name: "Bezelye", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimek Çorbası",
        description: "Kırmızı mercimek ve sebzelerle hazırlanan dengeli çorba",
        calories: 280,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "1 su bardağı" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Makarna",
        description: "Sebzeli ve protein zengini makarna",
        calories: 450,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tam buğday makarna", amount: "100 gr" },
            { name: "Mantar", amount: "100 gr" },
            { name: "Biber", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Nohutlu Pilav",
        description: "Nohut ve pirinç pilavı ile hazırlanan dengeli yemek",
        calories: 380,
        dietType: "dengeli",
        calorieRange: "düşük",
        ingredients: [
            { name: "Haşlanmış nohut", amount: "1 su bardağı" },
            { name: "Pirinç", amount: "1 su bardağı" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Pilav",
        description: "Dana kıymadan hazırlanan köfte ve pirinç pilavı ile zengin yemek",
        calories: 1350,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "300 gr" },
            { name: "Pirinç", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Balıklı Pilav",
        description: "Levrek ve pirinç pilavı ile hazırlanan zengin dengeli yemek",
        calories: 1280,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Levrek", amount: "300 gr" },
            { name: "Pirinç", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Makarna",
        description: "Tavuk göğsü ve tam buğday makarna ile hazırlanan zengin dengeli yemek",
        calories: 1320,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "300 gr" },
            { name: "Tam buğday makarna", amount: "200 gr" },
            { name: "Domates sosu", amount: "1.5 su bardağı" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Makarna",
        description: "Dana kıymadan hazırlanan köfte ve tam buğday makarna ile zengin yemek",
        calories: 1420,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "300 gr" },
            { name: "Tam buğday makarna", amount: "200 gr" },
            { name: "Domates sosu", amount: "1.5 su bardağı" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Börek",
        description: "Tavuk göğsü ve yufka ile hazırlanan zengin dengeli börek",
        calories: 1450,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "300 gr" },
            { name: "Yufka", amount: "6 adet" },
            { name: "Peynir", amount: "200 gr" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Börek",
        description: "Dana kıymadan hazırlanan köfte ve yufka ile zengin börek",
        calories: 1480,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "300 gr" },
            { name: "Yufka", amount: "6 adet" },
            { name: "Peynir", amount: "200 gr" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Pizza",
        description: "Tavuk göğsü ve tam buğday hamur ile hazırlanan zengin dengeli pizza",
        calories: 1380,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "300 gr" },
            { name: "Tam buğday unu", amount: "3 su bardağı" },
            { name: "Domates sosu", amount: "1.5 su bardağı" },
            { name: "Peynir", amount: "200 gr" }
        ]
    },
    {
        name: "Köfteli Pizza",
        description: "Dana kıymadan hazırlanan köfte ve tam buğday hamur ile zengin pizza",
        calories: 1420,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "300 gr" },
            { name: "Tam buğday unu", amount: "3 su bardağı" },
            { name: "Domates sosu", amount: "1.5 su bardağı" },
            { name: "Peynir", amount: "200 gr" }
        ]
    },
    {
        name: "Tavuklu Güveç",
        description: "Tavuk göğsü ve sebzelerle hazırlanan zengin dengeli güveç",
        calories: 1280,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "300 gr" },
            { name: "Patates", amount: "3 adet" },
            { name: "Havuç", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Güveç",
        description: "Dana kıymadan hazırlanan köfte ve sebzelerle zengin güveç",
        calories: 1350,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "300 gr" },
            { name: "Patates", amount: "3 adet" },
            { name: "Havuç", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Lazanya",
        description: "Tavuk göğsü ve tam buğday lazanya yaprakları ile hazırlanan zengin dengeli lazanya",
        calories: 1420,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "300 gr" },
            { name: "Tam buğday lazanya yaprağı", amount: "12 adet" },
            { name: "Domates sosu", amount: "2 su bardağı" },
            { name: "Peynir", amount: "200 gr" }
        ]
    },
    {
        name: "Köfteli Lazanya",
        description: "Dana kıymadan hazırlanan köfte ve tam buğday lazanya yaprakları ile zengin lazanya",
        calories: 1480,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "300 gr" },
            { name: "Tam buğday lazanya yaprağı", amount: "12 adet" },
            { name: "Domates sosu", amount: "2 su bardağı" },
            { name: "Peynir", amount: "200 gr" }
        ]
    },
    {
        name: "Tavuklu Kuskus",
        description: "Tavuk göğsü ve kuskus ile hazırlanan zengin dengeli yemek",
        calories: 1280,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "300 gr" },
            { name: "Kuskus", amount: "2 su bardağı" },
            { name: "Sebze karışımı", amount: "300 gr" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Kuskus",
        description: "Dana kıymadan hazırlanan köfte ve kuskus ile zengin yemek",
        calories: 1350,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "300 gr" },
            { name: "Kuskus", amount: "2 su bardağı" },
            { name: "Sebze karışımı", amount: "300 gr" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Pilav",
        description: "Tavuk göğsü ve pirinç pilavı ile hazırlanan zengin dengeli yemek",
        calories: 1300,
        dietType: "dengeli",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "300 gr" },
            { name: "Pirinç", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Sebze Güveç",
        description: "Tavuk göğsü ve sebzelerle hazırlanan fırın güveç",
        calories: 680,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Tavuk göğsü", amount: "200 gr" },
            { name: "Patates", amount: "2 adet" },
            { name: "Havuç", amount: "2 adet" },
            { name: "Kabak", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Somon ve Sebzeli Pilav",
        description: "Izgara somon fileto ve sebzeli bulgur pilavı",
        calories: 750,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Somon fileto", amount: "200 gr" },
            { name: "Bulgur", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Bezelye", amount: "100 gr" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Hindi Göğsü ve Kinoa Salatası",
        description: "Izgara hindi göğsü ve sebzeli kinoa salatası",
        calories: 720,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Hindi göğsü", amount: "200 gr" },
            { name: "Kinoa", amount: "100 gr" },
            { name: "Avokado", amount: "1/2 adet" },
            { name: "Cherry domates", amount: "8 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Ton Balıklı Makarna",
        description: "Ton balığı ve sebzeli tam buğday makarna",
        calories: 650,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Ton balığı", amount: "150 gr" },
            { name: "Tam buğday makarna", amount: "100 gr" },
            { name: "Konserve domates", amount: "200 gr" },
            { name: "Sarımsak", amount: "2 diş" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Karides ve Sebzeli Pilav",
        description: "Izgara karides ve sebzeli esmer pirinç pilavı",
        calories: 780,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Karides", amount: "200 gr" },
            { name: "Esmer pirinç", amount: "100 gr" },
            { name: "Bezelye", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Sebzeli Pilav",
        description: "Tavuk göğsü ve sebzeli esmer pirinç pilavı",
        calories: 720,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Tavuk göğsü", amount: "200 gr" },
            { name: "Esmer pirinç", amount: "100 gr" },
            { name: "Bezelye", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Köfte ve Bulgur Pilavı",
        description: "Izgara köfte ve sebzeli bulgur pilavı",
        calories: 850,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Dana kıyma", amount: "200 gr" },
            { name: "Bulgur", amount: "100 gr" },
            { name: "Domates", amount: "2 adet" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Dana Antrikot ve Sebzeli Pilav",
        description: "Izgara dana antrikot ve sebzeli bulgur pilavı",
        calories: 850,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Dana antrikot", amount: "250 gr" },
            { name: "Bulgur", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Bezelye", amount: "100 gr" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Hindi Göğsü ve Tam Buğday Makarna",
        description: "Izgara hindi göğsü ve sebzeli tam buğday makarna",
        calories: 720,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Hindi göğsü", amount: "200 gr" },
            { name: "Tam buğday makarna", amount: "100 gr" },
            { name: "Mantar", amount: "100 gr" },
            { name: "Domates", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Uskumru ve Sebzeli Pilav",
        description: "Izgara uskumru ve sebzeli esmer pirinç pilavı",
        calories: 780,
        dietType: "dengeli",
        calorieRange: "orta",
        ingredients: [
            { name: "Uskumru", amount: "200 gr" },
            { name: "Esmer pirinç", amount: "100 gr" },
            { name: "Bezelye", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    }
];

module.exports = balancedMeals; 
