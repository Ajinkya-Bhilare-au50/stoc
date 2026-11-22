import FullPageMessage from "../components/ui/FullPageMessage";
import { ROUTES } from "../config/routes";

export default function NotFoundPage() {
  return (
    <FullPageMessage
      code="404"
      title="Page not found"
      description="The page you're looking for doesn't exist or has moved."
      action={{ label: "Back to home", to: ROUTES.home }}
    />
  );
}
