// @/lib/Members.ts

export interface Social {
  id: number;
  name: string; // "Phone", "Email", "Viber", "WeChat"
  url: string;
}

export interface Member {
  id: number;
  name: string;
  job: string;
  about: string;
  src: string;
  socials?: Social[];
}

export interface SubZone {
  id: number;
  zone: string;
  teamMembers?: Member[];
}

export interface Zone {
  id: number;
  zone: string;
  teamMembers?: Member[];
  zones?: SubZone[];
}

export const zonesData: Zone[] = [
  {
    id: 1,
    zone: "Улаанбаатар хот, Хонхор гаалийн хяналтийн бүс ",
    teamMembers: [
      {
        id: 101,
        name: "Г.Нямсүрэн",
        job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
        about:
          "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.\n\nСарантуяа.Г нь манай багийн гол хөдөлгөгч хүч бөгөөд түүний мэдлэг, ур чадвар нь бидний амжилтын үндэс суурь болж өгдөг. Тэрээр шинэ санаачлага, бүтээлч шийдлүүдийг бий болгоход үргэлж бэлэн байдаг.",
        src: "/names/sarantuya.jpg",
        socials: [
          { id: 1, name: "Phone", url: "tel:+976-91913797" },
          { id: 2, name: "Email", url: "mailto:togtokhnomt10@gmail.com" },
          // VIBER FIX: Use %2B instead of +
          { id: 3, name: "Viber", url: "viber://chat?number=%2B97695118788" },
          // WECHAT FIX: Just the ID
          { id: 4, name: "WeChat", url: "sarantuya_wechatid" },
        ],
      },
    ],
  },
  {
    id: 2,
    zone: "Бор өндөр сум, Гүний гаалийн газрын харьяа",
    teamMembers: [
      {
        id: 102,
        name: "М.Гэрэлмаа",
        job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
        about:
          "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.\n\nТэрээр шинэ санаачлага, бүтээлч шийдлүүдийг бий болгоход үргэлж бэлэн байдаг.",
        src: "/names/sarantuya.jpg",
        socials: [
          { id: 1, name: "Phone", url: "tel:+976-88011346" },
          { id: 2, name: "Email", url: "mailto:togtokhnomt05@gmail.com" },
          { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
          { id: 4, name: "WeChat", url: "gerelmaa_wechat" },
        ],
      },
    ],
  },
  {
    id: 3,
    zone: "Чойр дахь гаалийн газрын харьяа  Эф Би Эл Жи ХХК-ны гаалийн хяналтын бүс",
    teamMembers: [
      {
        id: 103,
        name: "Л.Ганчимэг",
        job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
        about:
          "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
        src: "/names/sarantuya.jpg",
        socials: [
          { id: 1, name: "Phone", url: "tel:+976-88815330" },
          { id: 2, name: "Email", url: "mailto:togtokhnomt04@gmail.com" },
          { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
          { id: 4, name: "WeChat", url: "ganchimeg_wechat" },
        ],
      },
    ],
  },
  {
    id: 4,
    zone: "`Замын үүд Гаалийн газрын харьяа` гаалийн хяналтын бүсүүд",
    zones: [
      {
        id: 52,
        zone: "`Э транс ложистикс` ХХК-ны гаалийн хяналтын бүс ",
        teamMembers: [
          {
            id: 104,
            name: "М.Дулмаа",
            job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
            about:
              "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
            src: "/names/sarantuya.jpg",
            socials: [
              { id: 1, name: "Phone", url: "tel:+976-99134771" },
              { id: 2, name: "Email", url: "mailto:togtokhnomt9901@gmail.com" },
              { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
              { id: 4, name: "WeChat", url: "dulmaa_wechat" },
            ],
          },
          {
            id: 105,
            name: "П.Золзаяа",
            job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
            about:
              "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
            src: "/names/sarantuya.jpg",
            socials: [
              { id: 1, name: "Phone", url: "tel:+976-99172613" },
              { id: 2, name: "Email", url: "mailto:togtokhnomt03@gmail.com" },
              { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
              { id: 4, name: "WeChat", url: "zolzaya_wechat" },
            ],
          },
          {
            id: 106,
            name: "Ө.Нямдорж",
            job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
            about:
              "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
            src: "/names/sarantuya.jpg",
            socials: [
              { id: 1, name: "Phone", url: "tel:+976-86849742" },
              { id: 2, name: "Email", url: "mailto:togtokhnomt9906@gmail.com " },
              { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
              { id: 4, name: "WeChat", url: "nyamdorj_wechat" },
            ],
          },
        ],
      },
      {
        id: 53,
        zone: "`Чингэлэг шалгах рентген төхөөрөмж` гаалийн хяналтын бүс",
        teamMembers: [
          {
            id: 107,
            name: "С.Дэлгэрмаа",
            job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
            about:
              "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
            src: "/names/sarantuya.jpg",
            socials: [
              { id: 1, name: "Phone", url: "tel:+976-89858081" },
              { id: 2, name: "Email", url: "mailto:togtokhnomt07@gmail.com" },
              { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
              { id: 4, name: "WeChat", url: "delgermaa_wechat" },
            ],
          },
        ],
      },
      {
        id: 54,
        zone: "`Чин засагт ложистикс` ХХК-ны гаалийн хяналтын бүс",
        teamMembers: [
          {
            id: 108,
            name: "Т.Нарантуяа",
            job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
            about:
              "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
            src: "/names/sarantuya.jpg",
            socials: [
              { id: 1, name: "Phone", url: "tel:+976-88556529" },
              { id: 2, name: "Email", url: "mailto:togtokhnomt09@gmail.com" },
              { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
              { id: 4, name: "WeChat", url: "narantuya_wechat" },
            ],
          },
        ],
      },
    ],
  },
];

// 1. Get a single member by ID (scanning all zones)
export function getMemberById(id: string | number): Member | undefined {
  const searchId = Number(id);
  for (const zone of zonesData) {
    if (zone.teamMembers) {
      const found = zone.teamMembers.find((m) => m.id === searchId);
      if (found) return found;
    }
    if (zone.zones) {
      for (const subZone of zone.zones) {
        if (subZone.teamMembers) {
          const found = subZone.teamMembers.find((m) => m.id === searchId);
          if (found) return found;
        }
      }
    }
  }
  return undefined;
}

// 2. Get all members within a specific zone ID (including subzones)
export function getMembersByZoneId(zoneId: string | number): Member[] {
  const searchId = Number(zoneId);

  // First, try to find it as a top-level Zone
  const parentZone = zonesData.find((z) => z.id === searchId);

  if (parentZone) {
    // If it's a parent zone, gather its own members + all subzone members
    let members: Member[] = parentZone.teamMembers || [];
    if (parentZone.zones) {
      parentZone.zones.forEach((subZone) => {
        if (subZone.teamMembers) {
          members = [...members, ...subZone.teamMembers];
        }
      });
    }
    return members;
  }

  // If not found at top level, search inside the `zones` arrays (Sub-Zones)
  for (const zone of zonesData) {
    if (zone.zones) {
      const subZone = zone.zones.find((sz) => sz.id === searchId);
      if (subZone) {
        // If found, return only the members of this sub-zone
        return subZone.teamMembers || [];
      }
    }
  }

  return [];
}