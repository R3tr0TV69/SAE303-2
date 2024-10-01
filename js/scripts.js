function init() {
    gsap.to("#logo", {
      rotation: 360,
      duration: 3,
    });
    
    console.log(document.querySelector(".titre"));
    gsap.to(".titre", {
      opacity: 1,
      duration: 2,
      ease: "power2.in"
    });
    
    var s = Snap("#svg"); // Assurez-vous que vous avez un élément SVG avec l'ID "svg"

    Snap.load("./img/graph.svg", function(loadedFragment) {
        // Insérer le contenu du SVG dans le SVG principal
        s.append(loadedFragment);

        let graph = s.select("#graph");
        let chargingStations = s.select("#chargingStations");
        let cars = s.select("#cars");
        let nomVilles = s.select("#nomVilles");
        let legende = s.select("#legende");

        // Vérifier que l'élément cars existe
        if (cars) {
            // Ajouter l'événement mouseover
            cars.mouseover(function() {
                // Animer la translation de l'élément cars
                cars.animate({ transform: 'translate(100,0)' }, 500, mina.easeinout);
            });

            // Ajouter l'événement mouseout pour revenir à la position d'origine
            cars.mouseout(function() {
                // Réinitialiser la translation
                cars.animate({ transform: 'translate(0,0)' }, 500, mina.easeinout);
            });
        }
        if (chargingStations) {
            // Ajouter l'événement mouseover
            chargingStations.mouseover(function() {
                // Animer l'opacité de l'élément cars
                chargingStations.animate({ opacity: 0.5 }, 500, mina.easeinout);
            });
        
            // Ajouter l'événement mouseout pour revenir à l'opacité d'origine
            chargingStations.mouseout(function() {
                // Réinitialiser l'opacité
                chargingStations.animate({ opacity: 1 }, 500, mina.easeinout);
            });
        }
        if (legende) {
            // Ajouter l'événement mouseover
            legende.mouseover(function() {
                // Animer l'opacité de l'élément cars
                legende.animate({ opacity: 0.5, transform: 's1.2' }, 500, mina.easeinout);
            });
        
            // Ajouter l'événement mouseout pour revenir à l'opacité d'origine
            legende.mouseout(function() {
                // Réinitialiser l'opacité
                legende.animate({ opacity: 1, transform: 's1.0'}, 500, mina.easeinout);
            });
        }
         // Ajouter l'événement pour le bouton "btnCars"
         document.getElementById("btnCars").addEventListener("click", function() {
            if (cars) {
                // Vérifier l'opacité actuelle et alterner
                if (cars.attr("opacity") == 1) {
                    // Mettre l'opacité de l'élément cars à 0 (cacher)
                    cars.animate({ opacity: 0 }, 500, mina.easeinout);
                } else {
                    // Réinitialiser l'opacité à 1 (afficher)
                    cars.animate({ opacity: 1 }, 500, mina.easeinout);
                }
            }
        });
        document.getElementById("btnZoom").addEventListener("click", function() {
            // Agrandir l'ensemble du SVG de 1.2x
            s.animate({ transform: 's1.2' }, 500, mina.easeinout);
        });
        document.getElementById("btnZoomBase").addEventListener("click", function() {
            // Faire revenir l'ensemble du SVG à 1.0x
            s.animate({ transform: 's1.0' }, 500, mina.easeinout);
        });
    });
}

// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", init);
