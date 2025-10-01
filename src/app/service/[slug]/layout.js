import { getServiceBySlug } from "../../data/servicesData";

export async function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found - Verdicta Legal",
      description: "The service you are looking for was not found.",
    };
  }

  return {
    title: `${service.title} - Verdicta Legal Services in Alabama`,
    description: service.shortDescription,
    keywords: `${
      service.title
    }, Alabama legal services, Verdicta, ${service.features.join(", ")}`,
  };
}

export default function ServiceLayout({ children }) {
  return children;
}
