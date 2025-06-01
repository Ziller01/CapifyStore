let categories = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Posters' },
    { id: 2, name: 'Keycaps Valorant' },
    { id: 3, name: 'Keycaps Anime' },
    { id: 4, name: 'Figures' },
    { id: 5, name: 'Accessories' },
    { id: 6, name: 'Minecraft' },
], currentCat = 0;

let products = [
    
    // ------------------------------- (1) Accessories

    { categoryId: 1, price: 170, name: "Captain America - Poster 3D", image: "/media/products/2025-02-20_8ba457488bd22.webp"},
    { categoryId: 1, price: 170, name: "Wolverine - Poster 3D", image: "/media/products/2025-02-21_9b873d805c18c.webp"},
    { categoryId: 1, price: 170, name: "Ben Grimm - Poster 3D", image: "/media/products/2025-02-21_19c6629bb497c.webp"},
    { categoryId: 1, price: 170, name: "Harry Potter - Poster 3D", image: "/media/products/2025-02-20_102e07ba05d71.webp"},
    { categoryId: 1, price: 170, name: "Spider Man - Poster 3D", image: "/media/products/2025-02-14_b734e6d79487d.webp"},
    { categoryId: 1, price: 170, name: "Venom - Poster 3D", image: "/media/products/2025-02-17_f6f52c10b4a7c.webp"},
    { categoryId: 1, price: 170, name: "Star Wars 1 - Poster 3D", image: "/media/products/2025-02-09_f675ecc88fdc5.webp"},
    { categoryId: 1, price: 170, name: "Star Wars 2 - Poster 3D", image: "/media/products/2025-02-13_3f01790fe0577.webp"},
    { categoryId: 1, price: 170, name: "Deadpool - Poster 3D", image: "/media/products/2025-02-17_6692eeeefd6848.webp"},
    { categoryId: 1, price: 170, name: "Hulk - Poster 3D", image: "/media/products/2025-02-17_80ef76ff55d9a.webp"},
    { categoryId: 1, price: 170, name: "Iron Man - Poster 3D", image: "/media/products/2025-02-12_f9cb56479695c.webp"},
    { categoryId: 1, price: 170, name: "Bat Man - Poster 3D", image: "/media/products/2025-02-14_0cb36cb45f636.webp"},
    
    // ------------------------------- (2) Keycaps Valorant

    { categoryId: 2, price: 45, name: "1×Key Valorant Agent 1", image: "/media/products/291e83bb-6d0b-489c-922d-aff93be991c7.jpg"},
    { categoryId: 2, price: 45, name: "1×Key Valorant Agent 2", image: "/media/products/849d6752-e18a-459b-989f-9c64fdb3b307.jpg"},
    { categoryId: 2, price: 45, name: "1×Key Valorant Agent 3", image: "/media/products/25b86502-b4bb-43a6-ac74-a30d17ea8b92.jpg"},
    { categoryId: 2, price: 45, name: "1×Key Valorant Agent 4", image: "/media/products/82b2b2a9-7c0a-4d9d-b59f-4ec188866178.jpg"},
    
    // ------------------------------- (3) Keycaps Anime

    { categoryId: 3, price: 45, name: "1×Key One Piece 1", image: "/media/products/8f81c6c0-c72c-4519-9b57-0d59c6c80875.jpg"},
    { categoryId: 3, price: 45, name: "1×Key One Piece 2", image: "/media/products/22682553-85ba-49d1-8b57-1ad05d7dd470.jpg"},
    { categoryId: 3, price: 45, name: "1×Key DBZ Vol 1", image: "/media/products/3252d976-3374-417c-9de3-9e0dca1a4dd2.jpg"},
    { categoryId: 3, price: 45, name: "1×Key DBZ Vol 2", image: "/media/products/aeb4e37b-a42d-465a-b872-68387e95b040.jpg"},
    { categoryId: 3, price: 45, name: "1×Key Demon Slayer", image: "/media/products/5484e472-7f7a-45b0-b3e4-a5dbd8aebf03.jpg"},
    { categoryId: 3, price: 45, name: "1×Key Dragon Ball Z", image: "/media/products/44482440-9ca7-41dc-91c9-84812ecab624.jpg"},
    { categoryId: 3, price: 45, name: "1×Key CyberPunk", image: "/media/products/8793dbd5-e40e-4230-a88d-d8b026748c60.jpg"},
    { categoryId: 3, price: 45, name: "1×Key Bleach", image: "/media/products/aa4e04ae-c1ed-46cc-ad9d-d94e271276bc.jpg"},
    { categoryId: 3, price: 45, name: "1×Key My Hero Academia", image: "/media/products/95544b50-d44f-41c3-837b-3491c847dbbf.jpg"},
    { categoryId: 3, price: 45, name: "1×Key Totoro", image: "/media/products/684a58c5-5b14-43f8-9d3e-2d49a18c02d8.jpg"},
    { categoryId: 3, price: 45, name: "1×Key Berserk", image: "/media/products/05062924-bf84-42bb-a861-854c6bf83564.jpg"},
    { categoryId: 3, price: 45, name: "1×Key Attack On Titan 1", image: "/media/products/de12e15d-04c2-4623-9092-be501d9595b0.jpg"},
    { categoryId: 3, price: 45, name: "1×Key Attack On Titan 2", image: "/media/products/e59efe59-98ba-4be2-937a-f7cae677697f.jpg"},
    { categoryId: 3, price: 45, name: "1×Key Spy X", image: "/media/products/418fa052-ab1e-44a5-b812-645a20c870a9.jpg"},
    { categoryId: 3, price: 45, name: "1×Key DragonBall Z", image: "/media/products/335bcf7f-a5d2-4986-93a9-304eba23c751.jpg"},
    { categoryId: 3, price: 45, name: "1×Key Naruto 1", image: "/media/products/02bfa04c-716f-4629-85e8-a7652d44d9ff.jpg"},
    { categoryId: 3, price: 45, name: "1×Key Naruto 2", image: "/media/products/23616f1d-c111-4067-a321-da57b1729bb1.jpg"},
    { categoryId: 3, price: 45, name: "1×Key Pokemon", image: "/media/products/88b203c4-2607-41e5-aa9f-4c2d93d3291b.jpg"},
    
    // ------------------------------- (4) Figures

    { categoryId: 4, price: 180, name: "Chibi Cypher - Valorant", image: "/media/products/fnku2b3qs5691.jpg"},
    { categoryId: 4, price: 180, name: "Chibi Jett - Valorant", image: "/media/products/IMG_4973.jpeg"},
    { categoryId: 4, price: 180, name: "Omen - Valorant", image: "/media/products/2025-05-24_c76f95d8ae35c8.webp"},
    { categoryId: 4, price: 180, name: "Chibi Jinx - League of Legends", image: "/media/products/2025-05-02_a69938e3841f48.webp"},
    { categoryId: 4, price: 180, name: "Chibi Flash", image: "/media/products/2025-02-19_c4dd646d7cef4.png"},
    { categoryId: 4, price: 180, name: "Chibi Seishirō Nagi Blue Lock", image: "/media/products/nagi1.png"},
    { categoryId: 4, price: 180, name: "Chibi John Wick", image: "/media/products/wick.png"},
    { categoryId: 4, price: 180, name: "Chibi Hellboy", image: "/media/products/2024-01-17_f9edc6c90139b.webp"},
    { categoryId: 4, price: 180, name: "Chibi Captain Amerika", image: "/media/products/SDOutputImage_3.png"},
    { categoryId: 4, price: 180, name: "Chibi Naruto - Kakashi", image: "/media/products/output_1.png"},
    { categoryId: 4, price: 180, name: "Chibi Naruto - Uchiha Itachi", image: "/media/products/output.png"},
    { categoryId: 4, price: 180, name: "Chibi Son Goku Super Saiyan", image: "/media/products/Gemini_Generated_Image_3ffyf73ffyf73ffy.jpeg"},
    { categoryId: 4, price: 180, name: "Chibi Vegeta ssj blue", image: "/media/products/original.png"},
    { categoryId: 4, price: 180, name: "Chibi Cute Panda", image: "/media/products/1.jpg"},
    { categoryId: 4, price: 180, name: "Chibi Batman", image: "/media/products/c36.png"},
    { categoryId: 4, price: 180, name: "Chibi Cute Ninja", image: "/media/products/2024-09-06_at_12.48.22.png"},
    { categoryId: 4, price: 180, name: "Chibi GOKU", image: "/media/products/1735943550843.jpg"},
    { categoryId: 4, price: 180, name: "Chibi Iron Man", image: "/media/products/2.jpg"},
    { categoryId: 4, price: 180, name: "Chibi Freedy", image: "/media/products/SDOutputImage_2.png"},
    { categoryId: 4, price: 180, name: "Chibi Mortal Kombat", image: "/media/products/c19.png"},
    { categoryId: 4, price: 180, name: "Chibi Baz Yater", image: "/media/products/SDOutputImage_15.png"},
    { categoryId: 4, price: 180, name: "Chibi Wolverine", image: "/media/products/-1.jpg"},
    { categoryId: 4, price: 180, name: "Chibi Squid Game", image: "/media/products/SDOutputImage_4_1.png"},
    { categoryId: 4, price: 180, name: "Chibi Totoro", image: "/media/products/2024-09-14_a5accea7b37f6.webp"},
    { categoryId: 4, price: 180, name: "Chibi BayMax", image: "/media/products/2025-03-28_83d318aa47c5e.webp"},
    { categoryId: 4, price: 180, name: "Chibi Woody", image: "/media/products/SDOutputImage_19.png"},
    { categoryId: 4, price: 180, name: "Chibi Assassins Creed", image: "/media/products/PXL_20250329_145549092.PORTRAIT.ORIGINAL2.jpg"},
    { categoryId: 4, price: 180, name: "FUNKO POP! Ronaldo", image: "/media/products/11.webp"},
    { categoryId: 4, price: 180, name: "FUNKO POP! Elsa", image: "/media/products/12.webp"},
    { categoryId: 4, price: 180, name: "FUNKO POP! Superman", image: "/media/products/13.png"},
    { categoryId: 4, price: 180, name: "FUNKO POP! MESSI", image: "/media/products/14.webp"},
    { categoryId: 4, price: 180, name: "FUNKO POP! HITMAN", image: "/media/products/15.jpg"},
    { categoryId: 4, price: 180, name: "Funko Pop! Assassin's Creed", image: "/media/products/16.png"},
    { categoryId: 4, price: 180, name: "Funko Pop! The Thing - Marvel", image: "/media/products/17.png"},
    { categoryId: 4, price: 180, name: "Funko Pop! Sonic", image: "/media/products/18.jpg"},
    { categoryId: 4, price: 180, name: "Funko Pop! Mortal Kombat", image: "/media/products/19.png"},
    { categoryId: 4, price: 180, name: "Funko Pop! Joker", image: "/media/products/20.png"},
    { categoryId: 4, price: 180, name: "Funko pop! Springbonnie", image: "/media/products/21.webp"},
    { categoryId: 4, price: 180, name: "Funko Pop! Withered Bonnie", image: "/media/products/ezgif-221ff341b45599.png"},
    { categoryId: 4, price: 180, name: "Funko Pop! Withered Foxy", image: "/media/products/IMG_7563.png"},
    
    // ------------------------------- (5) Accessories

    { categoryId: 5, price: 250, name: "4 in 1 Towers", image: "/media/products/20240204_131838.jpg"},
    { categoryId: 5, price: 250, name: "Big Ben Tower", image: "/media/products/20200601174116-img-1829-01_7be3d43e-04b4-4e4e-b3d1-5d8d20fecc9f.jpg"},
    { categoryId: 5, price: 250, name: "Dragon Tower", image: "/media/products/2025-04-16_c5d3257257ac3.webp"},
    { categoryId: 5, price: 250, name: "Eiffle Tower", image: "/media/products/2025-02-01_98b1bc2aee1f7.webp"},
    { categoryId: 5, price: 250, name: "Articulated Skeleton Octopus", image: "/media/products/2025-05-25_61190145d75dd.webp"},
    { categoryId: 5, price: 250, name: "Articulated Crystal Dragon", image: "/media/products/1.webp"},
    { categoryId: 5, price: 250, name: "Moon City", image: "/media/products/13.png"},
    
    // ------------------------------- (6) Minecraft

    { categoryId: 6, price: 100, name: "Minecraft Lama", image: "/media/products/2.webp"},
    { categoryId: 6, price: 100, name: "Minecraft Chicken", image: "/media/products/3.webp"},
    { categoryId: 6, price: 100, name: "Minecraft Inventory", image: "/media/products/4.webp"},
    { categoryId: 6, price: 100, name: "Minecraft Skeleton", image: "/media/products/5.webp"},
    { categoryId: 6, price: 100, name: "Minecraft Ghast", image: "/media/products/6.webp"},
    { categoryId: 6, price: 100, name: "Minecraft Pixel Sunglasses", image: "/media/products/7.webp"},
    { categoryId: 6, price: 100, name: "Minecraft Articulated Creeper", image: "/media/products/8.webp"},
    { categoryId: 6, price: 100, name: "Minecraft Benchy", image: "/media/products/9.jpeg"},
    { categoryId: 6, price: 100, name: "Minecraft Logo", image: "/media/products/10.webp"},
    
].map((m, i) => ({ ...m, id: i + 1}))
