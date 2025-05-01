const veganMeals = [
    {
        name: "Mercimek Köftesi",
        description: "Kırmızı mercimek, bulgur ve sebzelerle hazırlanan geleneksel lezzet",
        calories: 320,
        dietType: "vegan",
        calorieRange: "100-500",
        ingredients: [
            { name: "Kırmızı Mercimek", amount: "1 su bardağı" },
            { name: "İnce Bulgur", amount: "1 su bardağı" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" },
            { name: "Maydanoz", amount: "1 demet" }
        ]
    },
    {
        name: "Sebzeli Kinoa Salatası",
        description: "Kinoa, avokado ve taze sebzelerle hazırlanan besleyici salata",
        calories: 420,
        dietType: "vegan",
        calorieRange: "100-500",
        ingredients: [
            { name: "Kinoa", amount: "1 su bardağı" },
            { name: "Avokado", amount: "1 adet" },
            { name: "Domates", amount: "2 adet" },
            { name: "Salatalık", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Nohutlu Ispanak Yemeği",
        description: "Nohut ve ıspanakla hazırlanan besleyici ana yemek",
        calories: 380,
        dietType: "vegan",
        calorieRange: "100-500",
        ingredients: [
            { name: "Nohut", amount: "1 su bardağı" },
            { name: "Ispanak", amount: "500 gram" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Sarımsak", amount: "2 diş" },
            { name: "Biber", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Nohutlu Pilav",
        description: "Nohut ve pirinç ile hazırlanan besleyici pilav",
        calories: 450,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Pirinç", amount: "1 su bardağı" },
            { name: "Haşlanmış nohut", amount: "1 su bardağı" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Avokado Tost",
        description: "Tam buğday ekmeği ve avokado ile hazırlanan sağlıklı tost",
        calories: 320,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tam buğday ekmeği", amount: "2 dilim" },
            { name: "Avokado", amount: "1/2 adet" },
            { name: "Domates", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimek Çorbası",
        description: "Kırmızı mercimek ile hazırlanan geleneksel çorba",
        calories: 180,
        dietType: "vegan",
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
        description: "Tam buğday makarna ve sebzelerle hazırlanan sağlıklı makarna",
        calories: 420,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tam buğday makarna", amount: "100 gr" },
            { name: "Domates", amount: "2 adet" },
            { name: "Biber", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Humus",
        description: "Nohut ve tahin ile hazırlanan geleneksel meze",
        calories: 250,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Haşlanmış nohut", amount: "1 su bardağı" },
            { name: "Tahin", amount: "2 yemek kaşığı" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" },
            { name: "Sarımsak", amount: "2 diş" }
        ]
    },
    {
        name: "Sebzeli Omlet",
        description: "Besleyici sebzelerle hazırlanan vegan omlet",
        calories: 280,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Nohut unu", amount: "1/2 su bardağı" },
            { name: "Mantar", amount: "100 gr" },
            { name: "Biber", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Salata",
        description: "Yeşil mercimek ve sebzelerle hazırlanan besleyici salata",
        calories: 220,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Yeşil mercimek", amount: "1 su bardağı" },
            { name: "Salatalık", amount: "1 adet" },
            { name: "Domates", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Pilav",
        description: "Pirinç ve sebzelerle hazırlanan sağlıklı pilav",
        calories: 380,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Pirinç", amount: "1 su bardağı" },
            { name: "Bezelye", amount: "1/2 su bardağı" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Köfte",
        description: "Kırmızı mercimek ve bulgur ile hazırlanan geleneksel köfte",
        calories: 350,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "1 su bardağı" },
            { name: "Bulgur", amount: "1/2 su bardağı" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Kuskus",
        description: "Kuskus ve sebzelerle hazırlanan sağlıklı yemek",
        calories: 320,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Kuskus", amount: "1 su bardağı" },
            { name: "Kabak", amount: "1 adet" },
            { name: "Patlıcan", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Çorba",
        description: "Yeşil mercimek ile hazırlanan besleyici çorba",
        calories: 200,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Yeşil mercimek", amount: "1 su bardağı" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Havuç", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Börek",
        description: "Yufka ve sebzelerle hazırlanan sağlıklı börek",
        calories: 450,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Yufka", amount: "4 adet" },
            { name: "Ispanak", amount: "500 gr" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Pilav",
        description: "Kırmızı mercimek ve pirinç ile hazırlanan besleyici pilav",
        calories: 400,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Pirinç", amount: "1 su bardağı" },
            { name: "Kırmızı mercimek", amount: "1/2 su bardağı" },
            { name: "Soğan", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Pizza",
        description: "Tam buğday hamuru ve sebzelerle hazırlanan sağlıklı pizza",
        calories: 480,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tam buğday unu", amount: "2 su bardağı" },
            { name: "Domates", amount: "2 adet" },
            { name: "Biber", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Salata",
        description: "Kırmızı mercimek ve sebzelerle hazırlanan besleyici salata",
        calories: 280,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "1 su bardağı" },
            { name: "Salatalık", amount: "1 adet" },
            { name: "Domates", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Makarna",
        description: "Tam buğday makarna ve sebzelerle hazırlanan sağlıklı makarna",
        calories: 420,
        dietType: "vegan",
        calorieRange: "düşük",
        ingredients: [
            { name: "Tam buğday makarna", amount: "100 gr" },
            { name: "Kabak", amount: "1 adet" },
            { name: "Patlıcan", amount: "1 adet" },
            { name: "Zeytinyağı", amount: "2 yemek kaşığı" }
        ]
    },
    {
        name: "Kuru Fasulye",
        description: "Kuru fasulye ve pirinç pilavı ile hazırlanan geleneksel yemek",
        calories: 650,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Kuru fasulye", amount: "2 su bardağı" },
            { name: "Pirinç", amount: "1 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Mantarlı Risotto",
        description: "Arborio pirinci ve mantarlarla hazırlanan İtalyan usulü risotto",
        calories: 720,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Arborio pirinci", amount: "1.5 su bardağı" },
            { name: "Mantar", amount: "400 gr" },
            { name: "Vegan beyaz şarap", amount: "1/2 su bardağı" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Lazanya",
        description: "Tam buğday lazanya ve sebzelerle hazırlanan İtalyan usulü lazanya",
        calories: 850,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Tam buğday lazanya yaprağı", amount: "12 adet" },
            { name: "Ispanak", amount: "500 gr" },
            { name: "Mantar", amount: "300 gr" },
            { name: "Vegan beşamel sos", amount: "2 su bardağı" }
        ]
    },
    {
        name: "Nohutlu Pilav",
        description: "Nohut ve pirinç ile hazırlanan besleyici pilav",
        calories: 680,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Pirinç", amount: "1.5 su bardağı" },
            { name: "Haşlanmış nohut", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Güveç",
        description: "Fırında pişirilen sebzeli güveç",
        calories: 750,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Patlıcan", amount: "2 adet" },
            { name: "Kabak", amount: "2 adet" },
            { name: "Patates", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Köfte",
        description: "Kırmızı mercimek ve bulgur ile hazırlanan geleneksel köfte",
        calories: 620,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "2 su bardağı" },
            { name: "Bulgur", amount: "1 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Pizza",
        description: "Tam buğday hamuru ve sebzelerle hazırlanan sağlıklı pizza",
        calories: 780,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Tam buğday unu", amount: "3 su bardağı" },
            { name: "Domates sosu", amount: "1 su bardağı" },
            { name: "Mantar", amount: "200 gr" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Pilav",
        description: "Kırmızı mercimek ve pirinç ile hazırlanan besleyici pilav",
        calories: 720,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Pirinç", amount: "1.5 su bardağı" },
            { name: "Kırmızı mercimek", amount: "1 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Börek",
        description: "Yufka ve sebzelerle hazırlanan sağlıklı börek",
        calories: 850,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Yufka", amount: "6 adet" },
            { name: "Ispanak", amount: "1 kg" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Mantarlı Pilav",
        description: "Mantar ve pirinç ile hazırlanan besleyici pilav",
        calories: 680,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Pirinç", amount: "1.5 su bardağı" },
            { name: "Mantar", amount: "400 gr" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Makarna",
        description: "Tam buğday makarna ve sebzelerle hazırlanan sağlıklı makarna",
        calories: 750,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Tam buğday makarna", amount: "200 gr" },
            { name: "Domates sosu", amount: "1 su bardağı" },
            { name: "Mantar", amount: "300 gr" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Çorba",
        description: "Kırmızı mercimek ile hazırlanan geleneksel çorba",
        calories: 580,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Havuç", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Kuskus",
        description: "Kuskus ve sebzelerle hazırlanan sağlıklı yemek",
        calories: 650,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Kuskus", amount: "2 su bardağı" },
            { name: "Kabak", amount: "2 adet" },
            { name: "Patlıcan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Salata",
        description: "Kırmızı mercimek ve sebzelerle hazırlanan besleyici salata",
        calories: 620,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "2 su bardağı" },
            { name: "Salatalık", amount: "2 adet" },
            { name: "Domates", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Pilav",
        description: "Pirinç ve sebzelerle hazırlanan sağlıklı pilav",
        calories: 700,
        dietType: "vegan",
        calorieRange: "orta",
        ingredients: [
            { name: "Pirinç", amount: "1.5 su bardağı" },
            { name: "Bezelye", amount: "1 su bardağı" },
            { name: "Havuç", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Tam Tahıllı Pizza",
        description: "Tam tahıllı hamur ve bol sebzeli vegan pizza",
        calories: 1250,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tam tahıllı un", amount: "4 su bardağı" },
            { name: "Domates sosu", amount: "1.5 su bardağı" },
            { name: "Mantar", amount: "400 gr" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Lazanya",
        description: "Tam buğday lazanya, sebzeler ve vegan beşamel sos ile hazırlanan zengin lazanya",
        calories: 1350,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tam buğday lazanya yaprağı", amount: "16 adet" },
            { name: "Ispanak", amount: "1 kg" },
            { name: "Mantar", amount: "500 gr" },
            { name: "Vegan beşamel sos", amount: "3 su bardağı" }
        ]
    },
    {
        name: "Kuru Fasulye Pilav",
        description: "Kuru fasulye ve pirinç pilavı ile hazırlanan geleneksel yemek",
        calories: 1280,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Kuru fasulye", amount: "3 su bardağı" },
            { name: "Pirinç", amount: "2 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Börek",
        description: "Yufka ve bol sebzeli hazırlanan zengin börek",
        calories: 1450,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Yufka", amount: "8 adet" },
            { name: "Ispanak", amount: "1.5 kg" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "5 yemek kaşığı" }
        ]
    },
    {
        name: "Mantarlı Risotto",
        description: "Arborio pirinci ve bol mantarlı hazırlanan İtalyan usulü risotto",
        calories: 1320,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Arborio pirinci", amount: "2.5 su bardağı" },
            { name: "Mantar", amount: "600 gr" },
            { name: "Vegan beyaz şarap", amount: "1 su bardağı" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Güveç",
        description: "Fırında pişirilen bol sebzeli güveç",
        calories: 1180,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Patlıcan", amount: "3 adet" },
            { name: "Kabak", amount: "3 adet" },
            { name: "Patates", amount: "4 adet" },
            { name: "Zeytinyağı", amount: "5 yemek kaşığı" }
        ]
    },
    {
        name: "Nohutlu Pilav",
        description: "Nohut ve pirinç ile hazırlanan besleyici pilav",
        calories: 1250,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Pirinç", amount: "2.5 su bardağı" },
            { name: "Haşlanmış nohut", amount: "3 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Köfte",
        description: "Kırmızı mercimek ve bulgur ile hazırlanan geleneksel köfte",
        calories: 1150,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "3 su bardağı" },
            { name: "Bulgur", amount: "1.5 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Makarna",
        description: "Tam buğday makarna ve bol sebzeli hazırlanan sağlıklı makarna",
        calories: 1280,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tam buğday makarna", amount: "300 gr" },
            { name: "Domates sosu", amount: "1.5 su bardağı" },
            { name: "Mantar", amount: "400 gr" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Pilav",
        description: "Kırmızı mercimek ve pirinç ile hazırlanan besleyici pilav",
        calories: 1350,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Pirinç", amount: "2.5 su bardağı" },
            { name: "Kırmızı mercimek", amount: "1.5 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Mantarlı Pilav",
        description: "Mantar ve pirinç ile hazırlanan besleyici pilav",
        calories: 1220,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Pirinç", amount: "2.5 su bardağı" },
            { name: "Mantar", amount: "600 gr" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Kuskus",
        description: "Kuskus ve bol sebzeli hazırlanan sağlıklı yemek",
        calories: 1180,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Kuskus", amount: "3 su bardağı" },
            { name: "Kabak", amount: "3 adet" },
            { name: "Patlıcan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Çorba",
        description: "Kırmızı mercimek ile hazırlanan geleneksel çorba",
        calories: 1050,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "3 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Havuç", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Salata",
        description: "Kırmızı mercimek ve sebzelerle hazırlanan besleyici salata",
        calories: 1120,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "3 su bardağı" },
            { name: "Salatalık", amount: "3 adet" },
            { name: "Domates", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Pilav",
        description: "Pirinç ve bol sebzeli hazırlanan sağlıklı pilav",
        calories: 1280,
        dietType: "vegan",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Pirinç", amount: "2.5 su bardağı" },
            { name: "Bezelye", amount: "1.5 su bardağı" },
            { name: "Havuç", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    }
];

module.exports = veganMeals; 
