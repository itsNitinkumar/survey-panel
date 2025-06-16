import { Footer } from "@/components/layouts/footer";

const PublicLayout: React.FC<IWrapper> =({
  children,
}) => {
  return (
    <>{children}
    <Footer />
    </>
  );
}

export default PublicLayout;
