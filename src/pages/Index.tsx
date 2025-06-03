
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Clock, MapPin, Filter, Search } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const profiles = [
    {
      id: 1,
      name: "Sakura",
      age: 24,
      location: "Tokyo",
      rating: 4.9,
      reviews: 127,
      price: 150,
      image: "photo-1649972904349-6e44c42644a7",
      category: "date",
      specialties: ["Dinner Date", "Movie Night", "Casual Hangout"]
    },
    {
      id: 2,
      name: "Yuki",
      age: 22,
      location: "Osaka",
      rating: 4.8,
      reviews: 98,
      price: 120,
      image: "photo-1581091226825-a6a2a5aee158",
      category: "events",
      specialties: ["Wedding Guest", "Business Events", "Parties"]
    },
    {
      id: 3,
      name: "Mika",
      age: 26,
      location: "Kyoto",
      rating: 5.0,
      reviews: 156,
      price: 200,
      image: "photo-1649972904349-6e44c42644a7",
      category: "travel",
      specialties: ["Travel Companion", "City Tours", "Cultural Events"]
    }
  ];

  const categories = [
    { id: "all", label: "All Categories", icon: "🌟" },
    { id: "date", label: "Date Night", icon: "💕" },
    { id: "events", label: "Events", icon: "🎉" },
    { id: "travel", label: "Travel", icon: "✈️" }
  ];

  const filteredProfiles = selectedCategory === "all" 
    ? profiles 
    : profiles.filter(profile => profile.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              RentaGF
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Browse</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">How it Works</a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Pricing</a>
            <Button variant="outline">Sign In</Button>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              Join Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Find Your Perfect
            <br />
            Companion
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with amazing companions for dates, events, and memorable experiences. 
            Professional, verified, and ready to make your time special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-3 text-lg">
              <Search className="mr-2 h-5 w-5" />
              Browse Companions
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-pink-300 text-pink-600 hover:bg-pink-50">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">1000+</div>
              <div className="text-gray-600">Verified Companions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50k+</div>
              <div className="text-gray-600">Happy Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-600"
                    : "border-pink-200 text-pink-600 hover:bg-pink-50"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Featured Companions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProfiles.map((profile) => (
              <Card key={profile.id} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={`https://images.unsplash.com/${profile.image}?w=400&h=300&fit=crop`}
                      alt={profile.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-pink-600 border-0">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {profile.rating}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0">
                        ¥{profile.price}/hour
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-800">{profile.name}, {profile.age}</h4>
                      <Heart className="h-5 w-5 text-gray-300 hover:text-pink-500 cursor-pointer transition-colors" />
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{profile.location}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{profile.reviews} reviews</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {profile.specialties.slice(0, 2).map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-pink-50 text-pink-600 border-pink-200">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                      <Clock className="mr-2 h-4 w-4" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Simple Pricing
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow border-0 bg-white/80">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold mb-4">Casual Date</h4>
                <div className="text-3xl font-bold text-pink-600 mb-2">¥100-150</div>
                <div className="text-gray-600 mb-6">per hour</div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Coffee dates</li>
                  <li>• Casual dining</li>
                  <li>• Shopping companion</li>
                  <li>• Basic conversation</li>
                </ul>
                <Button variant="outline" className="w-full border-pink-300 text-pink-600 hover:bg-pink-50">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-pink-500 to-purple-600 text-white transform scale-105">
              <CardContent className="p-8 text-center">
                <Badge className="bg-white/20 text-white mb-4">Most Popular</Badge>
                <h4 className="text-xl font-semibold mb-4">Premium Experience</h4>
                <div className="text-3xl font-bold mb-2">¥200-300</div>
                <div className="text-pink-100 mb-6">per hour</div>
                <ul className="text-sm text-pink-100 space-y-2 mb-6">
                  <li>• Fine dining dates</li>
                  <li>• Event companion</li>
                  <li>• Professional photos</li>
                  <li>• Extended conversations</li>
                </ul>
                <Button className="w-full bg-white text-pink-600 hover:bg-gray-100">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 bg-white/80">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold mb-4">VIP Experience</h4>
                <div className="text-3xl font-bold text-purple-600 mb-2">¥400+</div>
                <div className="text-gray-600 mb-6">per hour</div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Luxury experiences</li>
                  <li>• Travel companion</li>
                  <li>• Business events</li>
                  <li>• Custom experiences</li>
                </ul>
                <Button variant="outline" className="w-full border-purple-300 text-purple-600 hover:bg-purple-50">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-pink-500" />
                <span className="text-xl font-bold">RentaGF</span>
              </div>
              <p className="text-gray-400">
                Connecting people for memorable experiences and genuine companionship.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-sm">i</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RentaGF. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
