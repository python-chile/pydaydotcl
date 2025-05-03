import { NextResponse } from "next/server";

export function middleware(request) {
  const userAgent = request.headers.get("user-agent") || "";
  const isBot = /bot|facebookexternalhit|twitterbot|linkedinbot/.test(
    userAgent.toLowerCase()
  );
  const path = request.nextUrl.pathname;
  
  // Rutas protegidas basadas en variables de entorno
  const blockedPaths = {
    "/register": process.env.NEXT_PUBLIC_FEATURE_REGISTRATION !== "true",
    "/sponsors": process.env.NEXT_PUBLIC_FEATURE_SPONSORS !== "true",
  };

  // Permitir que los bots accedan para SEO
  if (isBot) return NextResponse.next();

  // Comprobar si la ruta actual está bloqueada
  for (const [route, isBlocked] of Object.entries(blockedPaths)) {
    if (path.startsWith(route) && isBlocked) {
      const url = new URL('/', request.url);
      url.searchParams.set(
        "maintenance",
        encodeURIComponent(`Acceso temporalmente deshabilitado: ${route}`)
      );
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Configuración para que el middleware se ejecute solo en las rutas necesarias
export const config = {
  matcher: ['/register/:path*', '/sponsors/:path*'],
};