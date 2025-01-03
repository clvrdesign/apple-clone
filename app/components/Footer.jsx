import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-gray-200 pt-10">
      <Container>
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-700 text-md font-bold">
                Shop and Learn
              </h2>
              <ul className="text-gray-700 text-sm">
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>Vision</li>
                <li>AirPods</li>
                <li>TV & Home</li>
                <li>AirTag</li>
                <li>Accessories</li>
                <li>Gift Cards</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-700 text-md font-bold">Apple Wallet</h2>
              <ul className="text-gray-700 text-sm">
                <li>Wallet</li>
                <li>Apple Card</li>
                <li>Apple Pay</li>
                <li>Apple Cash</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-700 text-md font-bold">Account</h2>
              <ul className="text-gray-700 text-sm">
                <li>Manage your Apple account</li>
                <li>Apple Store Account</li>
                <li>iCloud.com</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-700 text-md font-bold">Entertainment</h2>
              <ul className="text-gray-700 text-sm">
                <li>Apple One</li>
                <li>Apple TV+</li>
                <li>Apple Music</li>
                <li>Apple Arcade</li>
                <li>Fitness+</li>
                <li>Apple News+</li>
                <li>Apple Podcasts</li>
                <li>Apple Books</li>
                <li>App Store</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-gray-700 text-md font-bold">Apple Store</h2>
            <ul className="text-gray-700 text-sm">
              <li>Find a Store</li>
              <li>Genius bar</li>
              <li>Today at Apple</li>
              <li>Groupe Reservations</li>
              <li>Apple Camp</li>
              <li>Apple Store App</li>
              <li>Certified Refurbished</li>
              <li>Apple Trade In</li>
              <li>Financing</li>
              <li>Carrier Deals at Apple</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-700 text-md font-bold">
                For Business
              </h2>
              <ul className="text-gray-700 text-sm">
                <li>Apple and Business</li>
                <li>Shop for Business</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-700 text-md font-bold">For Education</h2>
              <ul className="text-gray-700 text-sm">
                <li>Apple and Education</li>
                <li>Shop for K-12</li>
                <li>shop for college</li>
                <li>Apple Cash</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-700 text-md font-bold">For Healthcare</h2>
              <ul className="text-gray-700 text-sm">
                <li>Apple in Healthcare</li>
                <li>Mac in Healthcare</li>
                <li>Health on Apple Watch</li>
                <li>Health Records on iPhone and iPad</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-700 text-md font-bold">For Government</h2>
              <ul className="text-gray-700 text-sm">
                <li>Shop for Government</li>
                <li>Shop for Veterans and Military</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-700 text-md font-bold">
                Apple Values
              </h2>
              <ul className="text-gray-700 text-sm">
                <li>Accessibility</li>
                <li>Education</li>
                <li>Environment</li>
                <li>Inclusion and Diversity</li>
                <li>Privacy</li>
                <li>Racial Equity and Justice</li>
                <li>Supply Chain</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-700 text-md font-bold">About Apple</h2>
              <ul className="text-gray-700 text-sm">
                <li>Newsroom</li>
                <li>Apple Leadership</li>
                <li>Career Opportunity</li>
                <li>Investors</li>
                <li>Ethics & Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-4">
          More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.
        </p>
        <div className="flex justify-between mt-4 py-6 border-t border-gray-300">
          <ul className="inline-flex gap-6 text-sm text-gray-600">
            <li>
              Copyright © 2025 Apple Inc. All rights reserved.
            </li>
            <li>Privacy</li>
            <li>Policy</li>
            <li>
              Terms of Use Sales and Refunds Legal Site Map
            </li>
          </ul>
          <ul className="inline-flex gap-6 text-sm text-gray-600">
            <li>Burundi</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
