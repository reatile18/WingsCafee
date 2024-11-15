import { User, LayoutDashboard, ListOrdered, Blocks } from "lucide-react";

const services = [
  {
    icon: <LayoutDashboard className="h-16 w-16" />,
    description: "Dashboard",
    href: "/",
  },
  {
    icon: <ListOrdered className="h-16 w-16" />,
    description: "Orders",
    href: "/orders",
  },
  {
    icon: <User className="h-16 w-16" />,
    description: "Users",
    href: "/user",
  },
  {
    icon: <Blocks className="h-16 w-16" />,
    description: "About Us Section",
    href: "#",
  },
];

export default function Service() {
  return (
    <div>
      <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-gray-800 text-3xl font-bold sm:text-4xl">
              Features
            </h3>
          </div>
          <div className="mt-12 flex justify-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
              {services.map((service, idx) => (
                <li key={idx}>
                  <div className="h-full w-full max-w-xs rounded-2xl bg-white p-6 border border-neutral-200 shadow-xl flex flex-col items-center justify-center">
                    <a href={service.href}>
                      <div className="text-xl rounded-full px-4 py-0.5 mt-4 flex justify-center">
                        {service.icon}
                      </div>
                      <p className="text-lg text-center font-bold text-neutral-500 mt-4">
                        {service.description}
                      </p>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}