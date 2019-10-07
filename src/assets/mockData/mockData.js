// sample data

const detailsData = {
  food_name: 'salmon',
  serving_unit: 'fillet',
  serving_weight_grams: 227,
  serving_qty: 1,
  nf_calories: 467.62,
  meal_type: 5,
  thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/375_thumb.jpg',
  total_grams: 227,
  total_calories: 467.62
};

const mockSearchData = {
  common: [
    {
      food_name: 'salmon',
      serving_unit: 'fillet',
      tag_name: 'salmon',
      serving_qty: 1,
      common_type: null,
      tag_id: '375',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/375_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'raw salmon',
      serving_unit: 'oz',
      tag_name: 'raw salmon',
      serving_qty: 3,
      common_type: null,
      tag_id: '3403',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/3403_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon maki',
      serving_unit: 'roll',
      tag_name: 'salmon maki',
      serving_qty: 1,
      common_type: null,
      tag_id: '3674',
      photo: {
        thumb: 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png',
        highres: null,
        is_user_uploaded: false
      },
      locale: 'en_US'
    },
    {
      food_name: 'wild salmon',
      serving_unit: 'oz',
      tag_name: 'wild salmon',
      serving_qty: 3,
      common_type: null,
      tag_id: '4510',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/4510_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon roll',
      serving_unit: 'roll',
      tag_name: 'salmon roll',
      serving_qty: 1,
      common_type: null,
      tag_id: '3886',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/3886_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon cake',
      serving_unit: 'patty',
      tag_name: 'Salmon patty',
      serving_qty: 1,
      common_type: null,
      tag_id: '4015',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/4015_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon curry',
      serving_unit: 'cup',
      tag_name: 'salmon curry',
      serving_qty: 1,
      common_type: null,
      tag_id: '13225',
      photo: {
        thumb: 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png',
        highres: null,
        is_user_uploaded: false
      },
      locale: 'en_US'
    },
    {
      food_name: 'smoke salmon',
      serving_unit: 'oz',
      tag_name: 'lox',
      serving_qty: 3,
      common_type: null,
      tag_id: '2002',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/2002_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon steak',
      serving_unit: 'steak',
      tag_name: 'salmon steak',
      serving_qty: 1,
      common_type: null,
      tag_id: '4638',
      photo: {
        thumb: 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png',
        highres: null,
        is_user_uploaded: false
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon salad',
      serving_unit: 'cup',
      tag_name: 'salmon salad',
      serving_qty: 1,
      common_type: null,
      tag_id: '3121',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon sushi',
      serving_unit: 'pieces',
      tag_name: 'salmon nigiri',
      serving_qty: 2,
      common_type: null,
      tag_id: '3953',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/3953_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon baked',
      serving_unit: 'fillet',
      tag_name: 'baked salmon fillet',
      serving_qty: 1,
      common_type: null,
      tag_id: '8271',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/8271_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'smoked salmon',
      serving_unit: 'oz',
      tag_name: 'lox',
      serving_qty: 3,
      common_type: null,
      tag_id: '2002',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/2002_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon burger',
      serving_unit: 'burger',
      tag_name: 'salmon burger',
      serving_qty: 1,
      common_type: null,
      tag_id: '1710',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/1710_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon nigiri',
      serving_unit: 'pieces',
      tag_name: 'salmon nigiri',
      serving_qty: 2,
      common_type: null,
      tag_id: '3953',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/3953_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon fillet',
      serving_unit: 'fillet',
      tag_name: 'salmon',
      serving_qty: 1,
      common_type: null,
      tag_id: '375',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/375_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon sashimi',
      serving_unit: 'piece',
      tag_name: 'salmon sashimi',
      serving_qty: 1,
      common_type: null,
      tag_id: '4090',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/4090_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'grilled salmon',
      serving_unit: 'fillet',
      tag_name: 'grilled salmon fillet',
      serving_qty: 1,
      common_type: null,
      tag_id: '8272',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/8272_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon sandwich',
      serving_unit: 'sandwich',
      tag_name: 'salmon sandwich',
      serving_qty: 1,
      common_type: null,
      tag_id: '4170',
      photo: {
        thumb: 'https://d2xdmhkmkbyw75.cloudfront.net/4170_thumb.jpg'
      },
      locale: 'en_US'
    },
    {
      food_name: 'salmon cobb salad',
      serving_unit: 'salad without dressing',
      tag_name: 'salmon cobb salad',
      serving_qty: 1,
      common_type: null,
      tag_id: '6729',
      photo: {
        thumb: 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png',
        highres: null,
        is_user_uploaded: false
      },
      locale: 'en_US'
    }
  ],
  branded: [
    {
      food_name: 'Salmon, Skin-On, Wild Caught',
      serving_unit: 'g',
      nix_brand_id: '546367a03a1aadb564d3bea5',
      brand_name_item_name: 'Salmon Fillets Salmon, Skin-On, Wild Caught',
      serving_qty: 113,
      nf_calories: 100,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/54636a62221d4f656dac84ae.jpeg'
      },
      brand_name: 'Salmon Fillets',
      region: 1,
      brand_type: 2,
      nix_item_id: '546367a03a1aadb564d3bea6',
      locale: 'en_US'
    },
    {
      food_name: 'Salmon, Silver Coho',
      serving_unit: 'oz',
      nix_brand_id: '51db37d4176fe9790a899f32',
      brand_name_item_name: 'SeaBear Wild Salmon Salmon, Silver Coho',
      serving_qty: 4,
      nf_calories: 160,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/59841d6200c8f0b07adce3c6.jpeg'
      },
      brand_name: 'SeaBear Wild Salmon',
      region: 1,
      brand_type: 2,
      nix_item_id: '59841d5f36957993510319a8',
      locale: 'en_US'
    },
    {
      food_name: 'Baked Salmon with Salmon Sauce',
      serving_unit: 'oz',
      nix_brand_id: '513fbc1283aa2dc80c0005f9',
      brand_name_item_name: 'Western Sizzlin Baked Salmon with Salmon Sauce',
      serving_qty: 3.5,
      nf_calories: 210,
      photo: {
        thumb: 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png',
        highres: null,
        is_user_uploaded: false
      },
      brand_name: 'Western Sizzlin',
      region: 1,
      brand_type: 1,
      nix_item_id: '513fc9e73fe3ffd403000d30',
      locale: 'en_US'
    },
    {
      food_name: 'Smoked Salmon, Keta',
      serving_unit: 'oz',
      nix_brand_id: '51db37d4176fe9790a899f32',
      brand_name_item_name: 'SeaBear Wild Salmon Smoked Salmon, Keta',
      serving_qty: 2,
      nf_calories: 80,
      photo: {
        thumb: 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png',
        highres: null,
        is_user_uploaded: false
      },
      brand_name: 'SeaBear Wild Salmon',
      region: 1,
      brand_type: 2,
      nix_item_id: '51c371a797c3e69de4b0afff',
      locale: 'en_US'
    },
    {
      food_name: 'Smoked Salmon Skewers',
      serving_unit: 'oz',
      nix_brand_id: '54b52eb3565b558019158717',
      brand_name_item_name: 'H. Van Wynen Salmon Smokers Smoked Salmon Skewers',
      serving_qty: 1.5,
      nf_calories: 76,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/54b5330e565b55801915889a.jpeg'
      },
      brand_name: 'H. Van Wynen Salmon Smokers',
      region: 1,
      brand_type: 2,
      nix_item_id: '54b52f03b1fc8a584e635d2c',
      locale: 'en_US'
    },
    {
      food_name: 'Lemon Baked Salmon Filet, Wild Salmon',
      serving_unit: 'g',
      nix_brand_id: '521b95434a56d006cae29705',
      brand_name_item_name: 'Boston Pizza Lemon Baked Salmon Filet, Wild Salmon',
      serving_qty: 439,
      nf_calories: 340,
      photo: {
        thumb: 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png',
        highres: null,
        is_user_uploaded: false
      },
      brand_name: 'Boston Pizza',
      region: 1,
      brand_type: 1,
      nix_item_id: '53444b4c7ba4ca15456f5323',
      locale: 'en_US'
    },
    {
      food_name: 'Lemon Baked Salmon Filet, Atlantic Salmon',
      serving_unit: 'g',
      nix_brand_id: '521b95434a56d006cae29705',
      brand_name_item_name: 'Boston Pizza Lemon Baked Salmon Filet, Atlantic Salmon',
      serving_qty: 448,
      nf_calories: 480,
      photo: {
        thumb: 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png',
        highres: null,
        is_user_uploaded: false
      },
      brand_name: 'Boston Pizza',
      region: 1,
      brand_type: 1,
      nix_item_id: '53444b4b7ba4ca15456f5322',
      locale: 'en_US'
    },
    {
      food_name: 'Silver Coho Salmon Portion, Deboned Skinless',
      serving_unit: 'oz',
      nix_brand_id: '5b2df0f218c572ad649a344f',
      brand_name_item_name: 'Natural Wild Salmon Silver Coho Salmon Portion, Deboned Skinless',
      serving_qty: 4,
      nf_calories: 160,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/5cbd6a3d324fb1da2d71e9e1.jpeg'
      },
      brand_name: 'Natural Wild Salmon',
      region: 1,
      brand_type: 2,
      nix_item_id: '5cbd6a3a1511c40e65cd837d',
      locale: 'en_US'
    },
    {
      food_name: 'Wild Alaskan Salmon, Smoked Salmon, Variety Pack',
      serving_unit: 'oz',
      nix_brand_id: '51db37cb176fe9790a8999b1',
      brand_name_item_name: 'Salmolux Gourmet Seafood Wild Alaskan Salmon, Smoked Salmon, Variety Pack',
      serving_qty: 3,
      nf_calories: 160,
      photo: {
        thumb: 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png',
        highres: null,
        is_user_uploaded: false
      },
      brand_name: 'Salmolux Gourmet Seafood',
      region: 1,
      brand_type: 2,
      nix_item_id: '51d2ff1dcc9bff111580f5e3',
      locale: 'en_US'
    },
    {
      food_name: 'Pink Salmon',
      serving_unit: 'pouch',
      nix_brand_id: '51db37b6176fe9790a898901',
      brand_name_item_name: 'Chicken Of The Sea Pink Salmon',
      serving_qty: 1,
      nf_calories: 70,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/5cc2b2854f8fc8b55dc2f226.jpeg'
      },
      brand_name: 'Chicken Of The Sea',
      region: 1,
      brand_type: 2,
      nix_item_id: '51c3ba9897c3e6d8d3b462f9',
      locale: 'en_US'
    },
    {
      food_name: 'Smoked Salmon',
      serving_unit: 'slices',
      nix_brand_id: '51db380c176fe9790a89b0d7',
      brand_name_item_name: 'Kirkland Signature Smoked Salmon',
      serving_qty: 2,
      nf_calories: 110,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/53f5fff3603460857e4d8add.jpeg'
      },
      brand_name: 'Kirkland Signature',
      region: 1,
      brand_type: 2,
      nix_item_id: '53f5feb96ef65a407edb1110',
      locale: 'en_US'
    },
    {
      food_name: 'Alaskan Salmon Burger',
      serving_unit: 'burger',
      nix_brand_id: '51db37c9176fe9790a8996c7',
      brand_name_item_name: 'Trident Alaskan Salmon Burger',
      serving_qty: 1,
      nf_calories: 170,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/5cc0bd0744ee5c0a76563871.jpeg'
      },
      brand_name: 'Trident',
      region: 1,
      brand_type: 2,
      nix_item_id: '53874407c58919142a541fa7',
      locale: 'en_US'
    },
    {
      food_name: 'Salmon Creations, Lemon Dill',
      serving_unit: 'pouch',
      nix_brand_id: '51db37b2176fe9790a8985e9',
      brand_name_item_name: 'StarKist Salmon Creations, Lemon Dill',
      serving_qty: 1,
      nf_calories: 90,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/5626aaa1477f7be969a06314.jpeg'
      },
      brand_name: 'StarKist',
      region: 1,
      brand_type: 2,
      nix_item_id: '5626a7f82d59798778dd1d5d',
      locale: 'en_US'
    },
    {
      food_name: 'Pink Salmon Fillet',
      serving_unit: 'oz',
      nix_brand_id: '526831133203b9c3390001c8',
      brand_name_item_name: 'Unknown Pink Salmon Fillet',
      serving_qty: 4,
      nf_calories: 100,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/59098220af06e43d218703ae.jpeg'
      },
      brand_name: 'Unknown',
      region: 1,
      brand_type: 2,
      nix_item_id: '590830bec9d0241d745ee758',
      locale: 'en_US'
    },
    {
      food_name: 'Pacific Salmon Burgers',
      serving_unit: 'burger',
      nix_brand_id: '51db37cb176fe9790a899885',
      brand_name_item_name: 'Trident Seafoods Pacific Salmon Burgers',
      serving_qty: 1,
      nf_calories: 170,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/55830a383e2138e374a71c5d.jpeg'
      },
      brand_name: 'Trident Seafoods',
      region: 1,
      brand_type: 2,
      nix_item_id: '5581f0eef8a04e347b7d5846',
      locale: 'en_US'
    },
    {
      food_name: 'Premium Salmon Burger',
      serving_unit: 'patty',
      nix_brand_id: '51db381b176fe9790a89b587',
      brand_name_item_name: "Trader Joe's Premium Salmon Burger",
      serving_qty: 1,
      nf_calories: 110,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/5cc011d10788766a03285edc.jpeg'
      },
      brand_name: "Trader Joe's",
      region: 1,
      brand_type: 2,
      nix_item_id: '538f42dc68fcd8d76eb25c72',
      locale: 'en_US'
    },
    {
      food_name: 'Salmon',
      serving_unit: 'oz',
      nix_brand_id: '513fbc1283aa2dc80c00004c',
      brand_name_item_name: "Bruegger's Salmon",
      serving_qty: 1.7999999523162842,
      nf_calories: 80,
      photo: {
        thumb: 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png',
        highres: null,
        is_user_uploaded: false
      },
      brand_name: "Bruegger's",
      region: 1,
      brand_type: 1,
      nix_item_id: '513fc996927da70408003bca',
      locale: 'en_US'
    },
    {
      food_name: 'Marinated Wild Alaskan Salmon, Seasoned Grill',
      serving_unit: 'fillet',
      nix_brand_id: '51db37ee176fe9790a89a901',
      brand_name_item_name: "Morey's Marinated Wild Alaskan Salmon, Seasoned Grill",
      serving_qty: 1,
      nf_calories: 240,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/53f5ff47b968dd36623e780b.jpeg'
      },
      brand_name: "Morey's",
      region: 1,
      brand_type: 2,
      nix_item_id: '53f5fed7b968dd36623e77d3',
      locale: 'en_US'
    },
    {
      food_name: 'Grilled Salmon, Classic Grilled',
      serving_unit: 'fillet',
      nix_brand_id: '51db37b2176fe9790a8985bc',
      brand_name_item_name: "Gorton's Grilled Salmon, Classic Grilled",
      serving_qty: 1,
      nf_calories: 100,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/5d4e7047f0bfbfef716eb47c.jpeg'
      },
      brand_name: "Gorton's",
      region: 1,
      brand_type: 2,
      nix_item_id: '51c3c65197c3e6d8d3b4bd9c',
      locale: 'en_US'
    },
    {
      food_name: 'Salmon Fillet',
      serving_unit: 'g oven cooked then skin removed',
      nix_brand_id: '545238f3ed1969521b404e10',
      brand_name_item_name: 'Tesco Salmon Fillet',
      serving_qty: 100,
      nf_calories: 221.41000366210938,
      photo: {
        thumb: 'https://d1r9wva3zcpswd.cloudfront.net/5789dc8aae60ce6f489a9f6b.jpeg'
      },
      brand_name: 'Tesco',
      region: 2,
      brand_type: 2,
      nix_item_id: '5789dccc95636571189a4d4e',
      locale: 'en_US'
    }
  ]
};

export  { mockSearchData, detailsData };
