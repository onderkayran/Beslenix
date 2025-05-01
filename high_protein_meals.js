const highProteinMeals = [
    {
        name: "Fırınlanmış Sebzeli Omlet",
        description: "Ispanak ve biberle hazırlanan hafif fırın omlet",
        calories: 450,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Yumurta", amount: "2 adet" },
            { name: "Ispanak", amount: "100 gr" },
            { name: "Kırmızı biber", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Sebzeli Güveç",
        description: "Tavuk göğsü ve sebzelerle hazırlanan ev yapımı güveç",
        calories: 650,
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Tavuk göğsü", amount: "200 gr" },
            { name: "Patates", amount: "1 adet" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Domates", amount: "1 adet" }
        ]
    },
    {
        name: "Izgara Köfte ve Salata",
        description: "Izgara köfte ve mevsim yeşillikleri",
        calories: 450,
        dietType: "yüksek protein",
        calorieRange: "düşük",
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
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "150 gr" },
            { name: "Biber", amount: "1 adet" },
            { name: "Domates", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Yoğurtlu Tavuk Salata",
        description: "Yoğurt soslu tavuk göğsü salatası",
        calories: 380,
        dietType: "yüksek protein",
        calorieRange: "düşük",
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
        dietType: "yüksek protein",
        calorieRange: "düşük",
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
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "120 gr" },
            { name: "Yulaf ezmesi", amount: "30 gr" },
            { name: "Roka", amount: "1 demet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Köfte Mini Porsiyon",
        description: "Az yağlı ızgara köfte ve közlenmiş sebze",
        calories: 380,
        dietType: "yüksek protein",
        calorieRange: "düşük",
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
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Light ton balığı", amount: "100 gr" },
            { name: "Kinoa", amount: "50 gr" },
            { name: "Salatalık", amount: "1 adet" },
            { name: "Cherry domates", amount: "5 adet" }
        ]
    },
    {
        name: "Tavuklu Sebze Sote",
        description: "Tavuk ve karışık sebze sotesi",
        calories: 520,
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Tavuk göğsü", amount: "200 gr" },
            { name: "Brokoli", amount: "200 gr" },
            { name: "Havuç", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuk Salata",
        description: "Izgara tavuk göğsü ve yeşilliklerle hazırlanan protein zengini salata",
        calories: 320,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "150 gr" },
            { name: "Marul", amount: "2 yaprak" },
            { name: "Salatalık", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Ton Balıklı Salata",
        description: "Ton balığı ve sebzelerle hazırlanan protein zengini salata",
        calories: 280,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Ton balığı", amount: "100 gr" },
            { name: "Marul", amount: "2 yaprak" },
            { name: "Domates", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Yumurtalı Omlet",
        description: "Sebzeli protein zengini omlet",
        calories: 350,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Yumurta", amount: "3 adet" },
            { name: "Mantar", amount: "100 gr" },
            { name: "Biber", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Köfte",
        description: "Dana kıymadan hazırlanan protein zengini köfte",
        calories: 420,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Dana kıyma", amount: "150 gr" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Sarımsak", amount: "2 diş" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Yoğurtlu Tavuk",
        description: "Yoğurt soslu tavuk göğsü",
        calories: 350,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "150 gr" },
            { name: "Yoğurt", amount: "100 gr" },
            { name: "Sarımsak", amount: "2 diş" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Balık",
        description: "Fırında pişirilmiş balık ve sebzeler",
        calories: 320,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Levrek", amount: "150 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Brokoli", amount: "100 gr" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Yulaflı Tavuk",
        description: "Yulaf kaplama tavuk göğsü",
        calories: 380,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "150 gr" },
            { name: "Yulaf", amount: "30 gr" },
            { name: "Yumurta", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Köfte",
        description: "Az yağlı ızgara köfte",
        calories: 350,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Dana kıyma", amount: "150 gr" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Sarımsak", amount: "2 diş" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Ton Balıklı Kinoa",
        description: "Ton balığı ve kinoa karışımı",
        calories: 420,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Ton balığı", amount: "100 gr" },
            { name: "Kinoa", amount: "50 gr" },
            { name: "Salatalık", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Sebze",
        description: "Tavuk ve sebze karışımı",
        calories: 380,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "150 gr" },
            { name: "Brokoli", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Yumurtalı Sebze",
        description: "Sebzeli yumurta karışımı",
        calories: 320,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Yumurta", amount: "3 adet" },
            { name: "Ispanak", amount: "100 gr" },
            { name: "Mantar", amount: "100 gr" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Balık",
        description: "Izgara balık ve sebzeler",
        calories: 350,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Levrek", amount: "150 gr" },
            { name: "Biber", amount: "1 adet" },
            { name: "Domates", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Salata",
        description: "Tavuk ve yeşillik salatası",
        calories: 380,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tavuk göğsü", amount: "150 gr" },
            { name: "Roka", amount: "1 demet" },
            { name: "Domates", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Ton Balıklı Salata",
        description: "Ton balığı ve yeşillik salatası",
        calories: 320,
        dietType: "yüksek protein",
        calorieRange: "düşük",
        ingredients: [
            { name: "Ton balığı", amount: "100 gr" },
            { name: "Marul", amount: "2 yaprak" },
            { name: "Salatalık", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Pilav",
        description: "Tavuk göğsü ve pirinç pilavı ile hazırlanan zengin protein yemeği",
        calories: 1250,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "400 gr" },
            { name: "Pirinç", amount: "2.5 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Pilav",
        description: "Dana kıymadan hazırlanan köfte ve pirinç pilavı",
        calories: 1350,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "500 gr" },
            { name: "Pirinç", amount: "2.5 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Balıklı Pilav",
        description: "Levrek ve pirinç pilavı ile hazırlanan zengin protein yemeği",
        calories: 1280,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Levrek", amount: "500 gr" },
            { name: "Pirinç", amount: "2.5 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Makarna",
        description: "Tavuk göğsü ve sebzeli tam buğday makarna",
        calories: 680,
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Tavuk göğsü", amount: "200 gr" },
            { name: "Tam buğday makarna", amount: "100 gr" },
            { name: "Mantar", amount: "100 gr" },
            { name: "Domates", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Makarna",
        description: "Dana kıymadan hazırlanan köfte ve tam buğday makarna",
        calories: 1420,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "500 gr" },
            { name: "Tam buğday makarna", amount: "300 gr" },
            { name: "Domates sosu", amount: "1.5 su bardağı" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Börek",
        description: "Tavuk göğsü ve yufka ile hazırlanan zengin protein böreği",
        calories: 1450,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "500 gr" },
            { name: "Yufka", amount: "6 adet" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Börek",
        description: "Dana kıymadan hazırlanan köfte ve yufka ile börek",
        calories: 1480,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "600 gr" },
            { name: "Yufka", amount: "6 adet" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Pizza",
        description: "Tavuk göğsü ve tam buğday hamuru ile hazırlanan zengin protein pizzası",
        calories: 1380,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "400 gr" },
            { name: "Tam buğday unu", amount: "4 su bardağı" },
            { name: "Domates sosu", amount: "1.5 su bardağı" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Pizza",
        description: "Dana kıymadan hazırlanan köfte ve tam buğday hamuru ile pizza",
        calories: 1420,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "500 gr" },
            { name: "Tam buğday unu", amount: "4 su bardağı" },
            { name: "Domates sosu", amount: "1.5 su bardağı" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Güveç",
        description: "Tavuk göğsü ve sebzelerle hazırlanan zengin protein güveci",
        calories: 1280,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "500 gr" },
            { name: "Patates", amount: "4 adet" },
            { name: "Havuç", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Güveç",
        description: "Dana kıymadan hazırlanan köfte ve sebzelerle güveç",
        calories: 1350,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "600 gr" },
            { name: "Patates", amount: "4 adet" },
            { name: "Havuç", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Lazanya",
        description: "Tavuk göğsü ve tam buğday lazanya ile hazırlanan zengin protein lazanyası",
        calories: 1420,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "500 gr" },
            { name: "Tam buğday lazanya yaprağı", amount: "16 adet" },
            { name: "Domates sosu", amount: "1.5 su bardağı" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Lazanya",
        description: "Dana kıymadan hazırlanan köfte ve tam buğday lazanya",
        calories: 1480,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "600 gr" },
            { name: "Tam buğday lazanya yaprağı", amount: "16 adet" },
            { name: "Domates sosu", amount: "1.5 su bardağı" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Kuskus",
        description: "Tavuk göğsü ve kuskus ile hazırlanan zengin protein yemeği",
        calories: 1280,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tavuk göğsü", amount: "400 gr" },
            { name: "Kuskus", amount: "3 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Köfteli Kuskus",
        description: "Dana kıymadan hazırlanan köfte ve kuskus",
        calories: 1350,
        dietType: "yüksek protein",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Dana kıyma", amount: "500 gr" },
            { name: "Kuskus", amount: "3 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Somon ve Sebzeli Pilav",
        description: "Izgara somon fileto ve sebzeli bulgur pilavı",
        calories: 750,
        dietType: "yüksek protein",
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
        name: "Izgara Biftek ve Patates",
        description: "Izgara dana biftek ve fırın patates",
        calories: 850,
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Dana biftek", amount: "250 gr" },
            { name: "Patates", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
            { name: "Taze kekik", amount: "1 tutam" }
        ]
    },
    {
        name: "Hindi Göğsü ve Kinoa Salatası",
        description: "Izgara hindi göğsü ve sebzeli kinoa salatası",
        calories: 720,
        dietType: "yüksek protein",
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
        dietType: "yüksek protein",
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
        dietType: "yüksek protein",
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
        dietType: "yüksek protein",
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
        dietType: "yüksek protein",
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
        dietType: "yüksek protein",
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
        dietType: "yüksek protein",
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
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Uskumru", amount: "200 gr" },
            { name: "Esmer pirinç", amount: "100 gr" },
            { name: "Bezelye", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Kinoa Bowl",
        description: "Izgara tavuk göğsü ve sebzeli kinoa bowl",
        calories: 680,
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Tavuk göğsü", amount: "200 gr" },
            { name: "Kinoa", amount: "100 gr" },
            { name: "Avokado", amount: "1/2 adet" },
            { name: "Cherry domates", amount: "8 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Palamut ve Sebzeli Pilav",
        description: "Izgara palamut ve sebzeli bulgur pilavı",
        calories: 750,
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Palamut", amount: "200 gr" },
            { name: "Bulgur", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Bezelye", amount: "100 gr" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Hindi Göğsü ve Sebzeli Pilav",
        description: "Izgara hindi göğsü ve sebzeli esmer pirinç pilavı",
        calories: 720,
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Hindi göğsü", amount: "200 gr" },
            { name: "Esmer pirinç", amount: "100 gr" },
            { name: "Bezelye", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Lüfer ve Sebzeli Pilav",
        description: "Izgara lüfer ve sebzeli bulgur pilavı",
        calories: 780,
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Lüfer", amount: "200 gr" },
            { name: "Bulgur", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Bezelye", amount: "100 gr" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Tavuklu Mercimek Pilavı",
        description: "Izgara tavuk göğsü ve sebzeli mercimek pilavı",
        calories: 750,
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Tavuk göğsü", amount: "200 gr" },
            { name: "Mercimek", amount: "100 gr" },
            { name: "Bulgur", amount: "50 gr" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Izgara Çipura ve Sebzeli Pilav",
        description: "Izgara çipura ve sebzeli esmer pirinç pilavı",
        calories: 720,
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Çipura", amount: "200 gr" },
            { name: "Esmer pirinç", amount: "100 gr" },
            { name: "Bezelye", amount: "100 gr" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Hindi Göğsü ve Mercimek Pilavı",
        description: "Izgara hindi göğsü ve sebzeli mercimek pilavı",
        calories: 750,
        dietType: "yüksek protein",
        calorieRange: "orta",
        ingredients: [
            { name: "Hindi göğsü", amount: "200 gr" },
            { name: "Mercimek", amount: "100 gr" },
            { name: "Bulgur", amount: "50 gr" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    }
];

module.exports = highProteinMeals; 
