function avg(table, info) {
    let sum = 0;
    for (let i = 0; i < table.length; i++) {
      sum += table[i][info];
    }
    const average = sum / table.length;
    return average;
  }
  
  const tableData = [
    {
      "index": 1,
      "icon": "<img src='hashmal.avif'>",
      "store": "מחסני חשמל",
      "address": "Bar Yehuda 147",
      "city": "haifa",
      "price": 4590,
      "link": "https://www.payngo.co.il/308835.html",
      "rating": 1/5
    },
    {
      "index": 2,
      "icon": "<img src='KSPscreen.jpg'>",
      "store": "KSP",
      "address": "Sderot Kugel 45",
      "city": "Holon",
      "price": 3950,
      "link": "https://ksp.co.il/web/item/266841",
      "rating": 5/5
    },
    {
      "index": 3,
      "icon": "<img src='olam.webp'>",
      "store": "עולם הקולנו",
      "address": "Poalei Tzedek 2",
      "city": "Holon",
      "price": 7990,
      "link": "https://www.cwc.co.il/product/%D7%9E%D7%A1%D7%9A-%D7%98%D7%9C%D7%95%D7%99%D7%96%D7%99%D7%94-75-nano75wow-lg-led-%D7%A4%D7%A8%D7%99%D7%98-%D7%91%D7%94%D7%A4%D7%AA%D7%A2%D7%94/",
      "rating": 3/5
    },
    {
      "index": 4,
      "icon": "<img src='ShekemScreen.avif'>",
      "store": "KSP",
      "address": "Seven-Stars Mall",
      "city": "Holon",
      "price": 7829,
      "link": "https://www.shekem-electric.co.il/mskim-vstriav/mskim-dqim-led-v-4k/mski-tlvizih/302983.html",
      "rating": 4/5
    },
  ];
  
  const avgPrice = avg(tableData, "price");
  console.log(avgPrice);
  
  function best(table, info1, info2){
      let bestPrice=Infinity, bestIndex;
      for(let i=0; i<table.length; i++){
      if(table[i][info1] < bestPrice && table[i][info2] >=4/5){
          bestPrice=table[i][info1];
          bestIndex=i;
      }
      }return bestIndex;
  }
  
  const bestOption = best(tableData, "price", "rating")
  console.log(bestOption);