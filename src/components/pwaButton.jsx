import  { useState, useEffect } from 'react';

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // Escuchar el evento 'beforeinstallprompt' para capturar el prompt de instalación
    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevenir que el navegador muestre su propio cuadro de instalación
      event.preventDefault();
      setDeferredPrompt(event); // Guardar el evento para activarlo más tarde
      setIsInstallable(true); // Hacer visible el botón de instalación
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Muestra el cuadro de instalación
      deferredPrompt.userChoice
        .then((choiceResult) => {
          console.log(choiceResult.outcome); // Resultado de la elección del usuario
          setDeferredPrompt(null); // Reseteamos el prompt
          setIsInstallable(false); // Ocultamos el botón
        })
        .catch((error) => {
          console.log('Error al instalar:', error);
        });
    }
  };

  return (
    isInstallable && (
      <button onClick={handleInstallClick} className="install-button w-30 h-30 bg-red-600">
        Instalar app
      </button>
    )
  );
};

export default InstallButton;
