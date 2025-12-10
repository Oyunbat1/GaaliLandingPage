export interface Social {
  id: number;
  name: string; // "Phone", "Email", "Viber", "WeChat", etc.
  url: string;
}

export interface Member {
  id: number;
  name: string;
  job: string;
  about: string; // Unified 'about' field replacing experience/skill
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
  zones?: SubZone[]; // Nested sub-zones
}

export const zonesData: Zone[] = [
  {
    id: 1,
    zone: "Улаанбаатар, Хонхор гаалийн хяналтийн бүс ",
    teamMembers: [
      {
        id: 101,
        name: "Г.Хэрлэн",
        job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
        about: "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.\n\nСарантуяа.Г нь манай багийн гол хөдөлгөгч хүч бөгөөд түүний мэдлэг, ур чадвар нь бидний амжилтын үндэс суурь болж өгдөг. Тэрээр шинэ санаачлага, бүтээлч шийдлүүдийг бий болгоход үргэлж бэлэн байдаг.",
        src: "/names/sarantuya.jpg",
        socials: [
          { id: 1, name: "Phone", url: "tel:+976-91069797" },
          { id: 2, name: "Email", url: "mailto:togtokhnomt08@gmail.com" },
          { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
          { id: 4, name: "WeChat", url: "weixin://dl/chat?sarantuya" },
        ],
      },
    ],
  },
  {
    id: 2,
    zone: "Бор өндөр гаалийн газрын харьяа гаалийн хяналтын бүс",
    teamMembers: [
      {
        id: 102,
        name: "М.Гэрэлмаа",
        job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
        about: "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.\n\nТэрээр шинэ санаачлага, бүтээлч шийдлүүдийг бий болгоход үргэлж бэлэн байдаг.",
        src: "/names/sarantuya.jpg",
       socials: [
          { id: 1, name: "Phone", url: "tel:+976-88011346" },
          { id: 2, name: "Email", url: "mailto:togtokhnomt05@gmail.com" },
          { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
          { id: 4, name: "WeChat", url: "weixin://dl/chat?sarantuya" },
        ],
      },
    ],
  },
  {
    id: 3,
    zone: "Чойр дахь гаалийн газрын харьяа гаалийн хяналтын бүс",
    teamMembers: [
      {
        id: 103,
        name: "Л.Ганчимэг",
        job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
        about: "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
        src: "/names/sarantuya.jpg",
        socials: [
          { id: 1, name: "Phone", url: "tel:+976-88815330" },
          { id: 2, name: "Email", url: "mailto:togtokhnomt04@gmail.com" },
          { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
          { id: 4, name: "WeChat", url: "weixin://dl/chat?sarantuya" },
        ],
      },
    ],
  },
  {
    id: 4,
    zone: "`Замын үүд Гаалийн газрын харьяа` гаалийн хяналтын бүсүүд",
    zones: [
      {
        id: 51,
        zone: "`Чингэлэг шалгах рентген төхөөрөмж` гаалийн хяналтын бүс",
        teamMembers: [
          {
            id: 104,
            name: "С.Дэлгэрмаа",
            job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
            about: "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
            src: "/names/sarantuya.jpg",
           socials: [
          { id: 1, name: "Phone", url: "tel:+976-89858081" },
          { id: 2, name: "Email", url: "mailto:togtokhnomt07@gmail.com" },
          { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
          { id: 4, name: "WeChat", url: "weixin://dl/chat?sarantuya" },
        ],
          },
        ],
      },
      {
        id: 52,
        zone: "`Э транс ложистикс` ХК-ны гаалийн хяналтын бүс ",
        teamMembers: [
          {
            id: 105,
            name: "М.Дулмаа",
            job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
            about: "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
            src: "/names/sarantuya.jpg",
      socials: [
          { id: 1, name: "Phone", url: "tel:+976-99134771" },
          { id: 2, name: "Email", url: "mailto:togtokhnomt9901@gmail.com" },
          { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
          { id: 4, name: "WeChat", url: "weixin://dl/chat?sarantuya" },
        ],
          },
                    {
            id: 108,
            name: "П.Золзаяа",
            job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
            about: "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
            src: "/names/sarantuya.jpg",
      socials: [
          { id: 1, name: "Phone", url: "tel:+976-99172613" },
          { id: 2, name: "Email", url: "mailto:togtokhnomt03@gmail.com" },
          { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
          { id: 4, name: "WeChat", url: "weixin://dl/chat?sarantuya" },
        ],
          },
           {
            id: 109,
            name: "Ө.Нямдорж",
            job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
            about: "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
            src: "/names/sarantuya.jpg",
      socials: [
          { id: 1, name: "Phone", url: "tel:+976-86849742" },
          { id: 2, name: "Email", url: "mailto:togtokhnomt9906@gmail.com " },
          { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
          { id: 4, name: "WeChat", url: "weixin://dl/chat?sarantuya" },
        ],
          },
        ],
      },
            {
        id: 53,
        zone:"`Чин засагт ложистикс` ХХК-ны гаалийн хяналтын бүс",
        teamMembers: [
          {
            id: 104,
            name: "Т.Нарантуяа",
            job: "Гаалийн бүртгэгдсэн мэргэжилтэн",
            about: "Манай багийн гишүүн Сарантуяа.Г нь Гаалийн бүртгэгдсэн мэргэжилтэн мэргэжлээр ажилладаг. Тэрээр хиймэл оюун ухаан болон маркетингийн чиглэлээр мэргэшсэн бөгөөд олон төсөл дээр амжилттай ажиллаж ирсэн туршлагатай.",
            src: "/names/sarantuya.jpg",
           socials: [
          { id: 1, name: "Phone", url: "tel:+976-88556529" },
          { id: 2, name: "Email", url: "mailto:togtokhnomt09@gmail.com" },
          { id: 3, name: "Viber", url: "viber://chat?number=%2B97699112233" },
          { id: 4, name: "WeChat", url: "weixin://dl/chat?sarantuya" },
        ],
          },
        ],
      },
    ],
  },
];

// --- HELPER FUNCTIONS ---

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

// 3. Get the first available member image in a zone for preview
export function getZonePreviewImage(zone: Zone): string {
  // Check main zone members first
  if (zone.teamMembers && zone.teamMembers.length > 0) {
    return zone.teamMembers[0].src;
  }
  // Check subzones if no main members
  if (zone.zones && zone.zones.length > 0) {
    for (const subZone of zone.zones) {
      if (subZone.teamMembers && subZone.teamMembers.length > 0) {
        return subZone.teamMembers[0].src;
      }
    }
  }
  // Fallback placeholder if zone has absolutely no members anywhere
  return "/names/placeholder.jpg";
}