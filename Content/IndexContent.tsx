import { Categories } from "../helper/types";

const illustrationImageRight: string =
  "https://www.etatcivil.info/wp-content/uploads/sites/7/2019/11/233-725-mariages-heterosexuels-homosexuels-celebres-2016_0_729_486.jpg";

const illustrationImageLeft: string =
  "https://assets-global.website-files.com/5f7adad57379a3a39ba3975a/61f8ad3f264370487210f280_02DBA36B-7CD8-4098-9949-656528CAB285_1_201_a.jpeg";

const titre: string =
  "Noce de coton vous accompagne dans les moments les plus festif de votre vie";

const introduction: string =
  "Nous proposont faire-part, et accessoires décoratif élégant et tendance";

const categoriesIntroduction: {
  image: string;
  title: Categories;
  text: string;
  subtitle: string;
}[] = [
  {
    image:
      "https://www.wedding-spot.com/blog/sites/wsblog/files/styles/webp_desktop/public/images/migrated/273-Bride%2Band%2Bgroom%2Bclose%2Bup%2Bsaying%2Btheir%2Bvows%2Bduring%2Bwedding%2Bceremony.jpg.webp?itok=fecBNiSf",
    title: Categories.FAIRE_PART,
    text: "Invitez vos proche de la plus belle des manière en leurs envoyant d'élégents faire-part personalisable à souhait pour que votre invitation soit unique.",
    subtitle: "Consultez nos faire-part",
  },
  {
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2022/06/safari-baby-shower-theme-ecomm-via-amazon.jpg?fit=700,700",
    title: Categories.COFFRETS,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloribus nesciunt nam molestias facilis exercitationem recusandae labore !",
    subtitle: "Consultez nos coffrets",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587752889012-a8dc4999e438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&w=1000&q=80",
    title: Categories.PLATEAUX,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis autem nihil repellendus sit! In sapiente odio harum accusamus. Praesentium a doloribus impedit officiis est mollitia.",
    subtitle: "Consultez nos plateaux",
  },
];

const advantagesImage: string =
  "https://i.etsystatic.com/6075796/r/il/d216b1/4174042036/il_fullxfull.4174042036_rtc1.jpg";

const advantages: {
  title: string;
  text: string;
}[] = [
  {
    title: "Qualité",
    text: "Des produits de qualité  selectionné avec soins",
  },
  {
    title: "Prix",
    text: "Un rapport qualité/prix exceptionnel de part la proximité avec nos fournisseurs",
  },
  {
    title: "Service",
    text: "Votre satisfaction nous est indispensable, c'est pourquoi nous sommes présents pour vous conseiller et à votre écoute en cas du moindre imprévu.",
  },
];

const questionsAnswers: {
  question: string;
  answer: string;
}[] = [
  {
    question: "Comment se passe une commande ?",
    answer:
      "Vous pouvez choisir vos produits sur notre site et nous vous contacterons par téléphone après votre commande pour définir ensemble de la personalisation que vous souhaitez. Vous pouvez également nous contactez sur notre instagram pour nous poser toutes questions nécessaire avant de passer commande, nous répondant rapidement à vos intérogations.",
  },
  {
    question: "Quels sont délais de livraison ?",
    answer:
      "Après la commande passé et la personalisation du produits validé, comptez 3 semaines pour le recevoir chez vous",
  },
  {
    question: "Si je ne suis pas satisfait du produit ?",
    answer:
      "Nous validons avec vous le produit avant de lancer sa fabriquation, si le produit n'est pas conforme nous vous remboursont, s'il est conforme mais que vous vous rétracté après la production démarrer aucun remboursement n'est possible.",
  },
];

const instagramTitle: string = "Suivez-nous sur Instagram @Noces_de_Coton";

const INSTAGRAM_LINK = "https://www.instagram.com/noces_de_coton/";

const instagramImages = [
  "images/insta1.jpg",
  "images/insta2.jpg",
  "images/insta3.jpg",
  "images/insta4.jpg",
];

const IndexContent = {
  illustrationImageRight,
  illustrationImageLeft,
  titre,
  introduction,
  categoriesIntroduction,
  advantagesImage,
  advantages,
  questionsAnswers,
  instagramTitle,
  INSTAGRAM_LINK,
  instagramImages,
};

export default IndexContent;
