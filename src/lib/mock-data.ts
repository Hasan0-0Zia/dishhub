export type Role = "buyer" | "seller" | "admin";

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  sellerId: string;
  sellerName: string;
  location: string;
  rating: number;
};

export type Seller = {
  id: string;
  name: string;
  shopName: string;
  phone: string;
  area: string;
  category: string;
  status: "Approved" | "Pending" | "Suspended";
};

export type Order = {
  id: string;
  buyerName: string;
  sellerName: string;
  dishName: string;
  qty: number;
  total: number;
  status: "Pending" | "Confirmed" | "Delivered";
  date: string;
};

export const categories = ["Rice", "Snacks", "Drinks", "Curry", "Dessert", "Bread"];
export const locations = ["Dhaka", "Mirpur", "Gulshan", "Chittagong", "Sylhet", "Banani"];

export const mockSellers: Seller[] = [
  { id: "s1", name: "Rahim Uddin", shopName: "Rahim's Kitchen", phone: "01711000001", area: "Dhanmondi", category: "Rice", status: "Approved" },
  { id: "s2", name: "Fatema Begum", shopName: "Fatema's Foodies", phone: "01711000002", area: "Gulshan", category: "Snacks", status: "Approved" },
  { id: "s3", name: "Karim Ali", shopName: "Karim Bhai Biryani", shopName2: "", phone: "01711000003", area: "Mirpur", category: "Curry", status: "Pending" } as any,
];

export const mockDishes: Dish[] = [
  { id: "d1", name: "Kacchi Biryani", description: "Slow-cooked mutton biryani with aromatic basmati rice and traditional spices.", price: 350, category: "Rice", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600", sellerId: "s1", sellerName: "Rahim's Kitchen", location: "Dhanmondi", rating: 4.8 },
  { id: "d2", name: "Fuchka", description: "Crispy puris filled with spicy tamarind water and chickpeas.", price: 80, category: "Snacks", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600", sellerId: "s2", sellerName: "Fatema's Foodies", location: "Gulshan", rating: 4.6 },
  { id: "d3", name: "Beef Tehari", description: "Spicy beef tehari cooked in mustard oil with aromatic rice.", price: 280, category: "Rice", image: "https://images.unsplash.com/photo-1633945274309-2c16c93f1ddc?w=600", sellerId: "s1", sellerName: "Rahim's Kitchen", location: "Dhanmondi", rating: 4.7 },
  { id: "d4", name: "Borhani", description: "Traditional spicy yogurt drink, perfect with biryani.", price: 60, category: "Drinks", image: "https://images.unsplash.com/photo-1596662577147-9219d7adf3b1?w=600", sellerId: "s2", sellerName: "Fatema's Foodies", location: "Gulshan", rating: 4.5 },
  { id: "d5", name: "Chicken Korma", description: "Rich and creamy chicken curry with cashew and cream.", price: 320, category: "Curry", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600", sellerId: "s3", sellerName: "Karim Bhai Biryani", location: "Mirpur", rating: 4.4 },
  { id: "d6", name: "Roshogolla", description: "Classic Bengali sweet — soft cheese balls in sugar syrup.", price: 200, category: "Dessert", image: "https://images.unsplash.com/photo-1605197788044-5e3a36b9dfa6?w=600", sellerId: "s2", sellerName: "Fatema's Foodies", location: "Gulshan", rating: 4.9 },
  { id: "d7", name: "Luchi & Aloo Dom", description: "Fluffy fried bread with spiced potato curry.", price: 150, category: "Bread", image: "https://images.unsplash.com/photo-1626777553635-f1d5e4ba51f4?w=600", sellerId: "s1", sellerName: "Rahim's Kitchen", location: "Dhanmondi", rating: 4.3 },
  { id: "d8", name: "Mango Lassi", description: "Refreshing yogurt drink blended with sweet mango.", price: 90, category: "Drinks", image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600", sellerId: "s3", sellerName: "Karim Bhai Biryani", location: "Mirpur", rating: 4.6 },
];

export const mockOrders: Order[] = [
  { id: "ORD-1001", buyerName: "Anika Rahman", sellerName: "Rahim's Kitchen", dishName: "Kacchi Biryani", qty: 2, total: 700, status: "Delivered", date: "2026-05-01" },
  { id: "ORD-1002", buyerName: "Sajid Khan", sellerName: "Fatema's Foodies", dishName: "Fuchka", qty: 3, total: 240, status: "Confirmed", date: "2026-05-03" },
  { id: "ORD-1003", buyerName: "Mehnaz Islam", sellerName: "Rahim's Kitchen", dishName: "Beef Tehari", qty: 1, total: 280, status: "Pending", date: "2026-05-05" },
  { id: "ORD-1004", buyerName: "Tanvir Hossain", sellerName: "Karim Bhai Biryani", dishName: "Chicken Korma", qty: 2, total: 640, status: "Delivered", date: "2026-05-02" },
  { id: "ORD-1005", buyerName: "Rumi Akter", sellerName: "Fatema's Foodies", dishName: "Roshogolla", qty: 1, total: 200, status: "Pending", date: "2026-05-06" },
];

export const taka = (n: number) => `৳${n.toLocaleString("en-BD")}`;