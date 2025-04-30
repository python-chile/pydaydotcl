const DebugPage = () => {
    // Log en consola para depurar
    console.log("NEXT_PUBLIC_SITE_URL:", process.env.NEXT_PUBLIC_SITE_URL);
  
    return (
      <div>
        <h1>Depuración de Variables de Entorno</h1>
        <p>NEXT_PUBLIC_SITE_URL: {process.env.NEXT_PUBLIC_SITE_URL}</p>
        <p>NEXT_PUBLIC_FEATURE_REGISTRATION: {process.env.NEXT_PUBLIC_FEATURE_REGISTRATION}</p>
        <p>NEXT_PUBLIC_FEATURE_SPONSOR_FORM: {process.env.NEXT_PUBLIC_FEATURE_SPONSOR_FORM}</p>
        <p>NEXT_PUBLIC_FEATURE_SPONSORS: {process.env.NEXT_PUBLIC_FEATURE_SPONSORS}</p>
      </div>
    );
  };
  
  export default DebugPage;