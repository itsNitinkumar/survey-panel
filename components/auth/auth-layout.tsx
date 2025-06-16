import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const AuthLayout =({ children, title, description }: any) => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex flex-col justify-center items-center bg-muted p-8 animate-slide-in-left">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold gradient-text mb-4">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 animate-slide-in-right">
        <Card className="w-full max-w-md shadow-none border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center gradient-text">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AuthLayout;
