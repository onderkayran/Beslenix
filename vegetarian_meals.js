const vegetarianMeals = [
    {
        name: "Nohutlu Semizotu Salatası",
        description: "Kırmızı soğan, nohut ve zeytinyağı ile hafif bir semizotu salatası",
        calories: 320,
        dietType: "vejetaryen",
        calorieRange: "düşük",
        ingredients: [
            { name: "Semizotu", amount: "1 demet" },
            { name: "Haşlanmış nohut", amount: "1 su bardağı" },
            { name: "Kırmızı soğan", amount: "1/2 adet" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Yoğurtlu Kabak Sote",
        description: "Sotelenmiş kabak ve yoğurt sos ile hafif öğün",
        calories: 380,
        dietType: "vejetaryen",
        calorieRange: "düşük",
        ingredients: [
            { name: "Kabak", amount: "2 adet" },
            { name: "Yoğurt", amount: "150 gr" },
            { name: "Sarımsak", amount: "1 diş" },
            { name: "Zeytinyağı", amount: "1 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimek Çorbası",
        description: "Kırmızı mercimek, soğan ve baharatlarla hazırlanan geleneksel Türk çorbası",
        calories: 250,
        dietType: "vejetaryen",
        calorieRange: "düşük",
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
        dietType: "vejetaryen",
        calorieRange: "düşük",
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
        name: "Mercimekli Salata",
    },
    {
        name: "Mercimekli Pilav",
        description: "Kırmızı mercimek ve pirinç pilavı ile hazırlanan zengin protein yemeği",
        calories: 750,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "2 su bardağı" },
            { name: "Pirinç", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Lazanya",
        description: "Sebzeli ve protein zengini lazanya",
        calories: 850,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Tam buğday lazanya yaprağı", amount: "12 adet" },
            { name: "Ispanak", amount: "400 gr" },
            { name: "Peynir", amount: "200 gr" },
            { name: "Domates sosu", amount: "1.5 su bardağı" }
        ]
    },
    {
        name: "Nohutlu Pilav",
        description: "Nohut ve pirinç pilavı ile hazırlanan zengin protein yemeği",
        calories: 780,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Haşlanmış nohut", amount: "2 su bardağı" },
            { name: "Pirinç", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Börek",
        description: "Sebzeli ve protein zengini börek",
        calories: 920,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Yufka", amount: "4 adet" },
            { name: "Ispanak", amount: "500 gr" },
            { name: "Peynir", amount: "300 gr" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Köfte",
        description: "Kırmızı mercimek ve bulgur ile hazırlanan zengin protein köfte",
        calories: 650,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "2 su bardağı" },
            { name: "Bulgur", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Pizza",
        description: "Sebzeli ve protein zengini pizza",
        calories: 880,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Tam buğday unu", amount: "3 su bardağı" },
            { name: "Mantar", amount: "200 gr" },
            { name: "Biber", amount: "2 adet" },
            { name: "Peynir", amount: "200 gr" }
        ]
    },
    {
        name: "Nohutlu Salata",
        description: "Nohut ve yeşilliklerle hazırlanan zengin protein salatası",
        calories: 720,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Haşlanmış nohut", amount: "2 su bardağı" },
            { name: "Roka", amount: "2 demet" },
            { name: "Domates", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Kuskus",
        description: "Sebzeli ve protein zengini kuskus",
        calories: 780,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Kuskus", amount: "2 su bardağı" },
            { name: "Bezelye", amount: "200 gr" },
            { name: "Havuç", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Pilav",
        description: "Kırmızı mercimek ve pirinç pilavı ile hazırlanan zengin protein yemeği",
        calories: 800,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "2 su bardağı" },
            { name: "Pirinç", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Lazanya",
        description: "Sebzeli ve protein zengini lazanya",
        calories: 850,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Tam buğday lazanya yaprağı", amount: "12 adet" },
            { name: "Ispanak", amount: "400 gr" },
            { name: "Peynir", amount: "200 gr" },
            { name: "Domates sosu", amount: "1.5 su bardağı" }
        ]
    },
    {
        name: "Nohutlu Pilav",
        description: "Nohut ve pirinç pilavı ile hazırlanan zengin protein yemeği",
        calories: 780,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Haşlanmış nohut", amount: "2 su bardağı" },
            { name: "Pirinç", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Börek",
        description: "Sebzeli ve protein zengini börek",
        calories: 920,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Yufka", amount: "4 adet" },
            { name: "Ispanak", amount: "500 gr" },
            { name: "Peynir", amount: "300 gr" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Köfte",
        description: "Kırmızı mercimek ve bulgur ile hazırlanan zengin protein köfte",
        calories: 650,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "2 su bardağı" },
            { name: "Bulgur", amount: "2 su bardağı" },
            { name: "Soğan", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Pizza",
        description: "Sebzeli ve protein zengini pizza",
        calories: 880,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Tam buğday unu", amount: "3 su bardağı" },
            { name: "Mantar", amount: "200 gr" },
            { name: "Biber", amount: "2 adet" },
            { name: "Peynir", amount: "200 gr" }
        ]
    },
    {
        name: "Nohutlu Salata",
        description: "Nohut ve yeşilliklerle hazırlanan zengin protein salatası",
        calories: 720,
        dietType: "vejetaryen",
        calorieRange: "orta",
        ingredients: [
            { name: "Haşlanmış nohut", amount: "2 su bardağı" },
            { name: "Roka", amount: "2 demet" },
            { name: "Domates", amount: "2 adet" },
            { name: "Zeytinyağı", amount: "3 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Pilav",
        description: "Kırmızı mercimek ve pirinç pilavı ile hazırlanan zengin protein yemeği",
        calories: 1250,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "3 su bardağı" },
            { name: "Pirinç", amount: "3 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Lazanya",
        description: "Sebzeli ve protein zengini lazanya",
        calories: 1350,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tam buğday lazanya yaprağı", amount: "16 adet" },
            { name: "Ispanak", amount: "600 gr" },
            { name: "Peynir", amount: "300 gr" },
            { name: "Domates sosu", amount: "2 su bardağı" }
        ]
    },
    {
        name: "Nohutlu Pilav",
        description: "Nohut ve pirinç pilavı ile hazırlanan zengin protein yemeği",
        calories: 1280,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Haşlanmış nohut", amount: "3 su bardağı" },
            { name: "Pirinç", amount: "3 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Börek",
        description: "Sebzeli ve protein zengini börek",
        calories: 1450,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Yufka", amount: "6 adet" },
            { name: "Ispanak", amount: "800 gr" },
            { name: "Peynir", amount: "400 gr" },
            { name: "Zeytinyağı", amount: "5 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Köfte",
        description: "Kırmızı mercimek ve bulgur ile hazırlanan zengin protein köfte",
        calories: 1150,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "3 su bardağı" },
            { name: "Bulgur", amount: "3 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Pizza",
        description: "Sebzeli ve protein zengini pizza",
        calories: 1380,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tam buğday unu", amount: "4 su bardağı" },
            { name: "Mantar", amount: "300 gr" },
            { name: "Biber", amount: "3 adet" },
            { name: "Peynir", amount: "300 gr" }
        ]
    },
    {
        name: "Nohutlu Salata",
        description: "Nohut ve yeşilliklerle hazırlanan zengin protein salatası",
        calories: 1220,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Haşlanmış nohut", amount: "3 su bardağı" },
            { name: "Roka", amount: "3 demet" },
            { name: "Domates", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Kuskus",
        description: "Sebzeli ve protein zengini kuskus",
        calories: 1280,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Kuskus", amount: "3 su bardağı" },
            { name: "Bezelye", amount: "300 gr" },
            { name: "Havuç", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Pilav",
        description: "Kırmızı mercimek ve pirinç pilavı ile hazırlanan zengin protein yemeği",
        calories: 1300,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "3 su bardağı" },
            { name: "Pirinç", amount: "3 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Lazanya",
        description: "Sebzeli ve protein zengini lazanya",
        calories: 1350,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tam buğday lazanya yaprağı", amount: "16 adet" },
            { name: "Ispanak", amount: "600 gr" },
            { name: "Peynir", amount: "300 gr" },
            { name: "Domates sosu", amount: "2 su bardağı" }
        ]
    },
    {
        name: "Nohutlu Pilav",
        description: "Nohut ve pirinç pilavı ile hazırlanan zengin protein yemeği",
        calories: 1280,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Haşlanmış nohut", amount: "3 su bardağı" },
            { name: "Pirinç", amount: "3 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Börek",
        description: "Sebzeli ve protein zengini börek",
        calories: 1450,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Yufka", amount: "6 adet" },
            { name: "Ispanak", amount: "800 gr" },
            { name: "Peynir", amount: "400 gr" },
            { name: "Zeytinyağı", amount: "5 yemek kaşığı" }
        ]
    },
    {
        name: "Mercimekli Köfte",
        description: "Kırmızı mercimek ve bulgur ile hazırlanan zengin protein köfte",
        calories: 1150,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Kırmızı mercimek", amount: "3 su bardağı" },
            { name: "Bulgur", amount: "3 su bardağı" },
            { name: "Soğan", amount: "3 adet" },
            { name: "Zeytinyağı", amount: "4 yemek kaşığı" }
        ]
    },
    {
        name: "Sebzeli Pizza",
        description: "Sebzeli ve protein zengini pizza",
        calories: 1380,
        dietType: "vejetaryen",
        calorieRange: "yüksek",
        ingredients: [
            { name: "Tam buğday unu", amount: "4 su bardağı" },
            { name: "Mantar", amount: "300 gr" },
            { name: "Biber", amount: "3 adet" },
            { name: "Peynir", amount: "300 gr" }
        ]
    }
];

module.exports = vegetarianMeals; 
