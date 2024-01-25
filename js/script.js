// $(document).ready(function(){

//     $('#menu').click(function(){
//         $(this).toggleClass('fa-times');
//         $('header').toggleClass('toggle');
//     });

//     $(window).on('scroll load',function(){
//         $('#menu').removeClass('fa-times');
//         $('header').removeClass('toggle');

//         if($(window).scrollTop()>0){
//             $('.top').show();
//         }else{
//             $('.top').hide();
//         }
//     });

//     $('a[href*="]').on('click',function(e){
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: $($(this).attr('href')).offset().top,

//         },
//             500,
//             'linear'
//         );
        
//     });

    
// });



$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    $('header .navbar ul li a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });
});



// function openModal(imageSrc, description, tools) {
//     document.getElementById("modal-image").src = imageSrc;
//     document.getElementById("modal-description").innerText = description;
//     document.getElementById("modal-tools").innerHTML = tools.split(',').map(tool => `<li>${tool.trim()}</li>`).join('');
//     document.getElementById("project-modal").style.display = "block";
// }

// function closeModal() {
//     document.getElementById("project-modal").style.display = "none";
// }


// function openModal(videoSrc, description, tools) {
//     var modalVideo = document.getElementById("modal-video");
//     modalVideo.src = videoSrc;
//     modalVideo.load();  // Recharge la vidéo pour éviter les problèmes de lecture

//     document.getElementById("modal-description").innerText = description;
//     document.getElementById("modal-tools").innerHTML = tools.split(',').map(tool => `<li>${tool.trim()}</li>`).join('');
//     document.getElementById("project-modal").style.display = "block";
// }

// function openModal(videoSrc, description, tools) {
//     var modalVideo = document.getElementById("modal-video");
//     modalVideo.src = videoSrc;
//     modalVideo.load();  // Recharge la vidéo pour éviter les problèmes de lecture

//     document.getElementById("modal-description").innerText = description;
//     document.getElementById("modal-tools").innerHTML = tools.split(',').map(tool => `<li>${tool.trim()}</li>`).join('');
//     document.getElementById("project-modal").style.display = "block";
// }

// function openModal(driveFileID, description, tools, githubLink) {
//     var modalVideo = document.getElementById("modal-video");

//     var embeddedURL = `https://drive.google.com/file/d/${driveFileID}/view?usp=drive_link`;

//     // Utiliser l'iframe avec l'URL embarquée et ajout de l'attribut autoplay
//     modalVideo.innerHTML = `<iframe src="${embeddedURL}" width="640" height="360" frameborder="0" ></iframe>`;

//     document.getElementById("modal-description").innerText = description;
//     document.getElementById("modal-tools").innerHTML = tools.split(',').map(tool => `<li>${tool.trim()}</li>`).join('');

//     // Ajouter le lien GitHub
//     var githubLinkElement = document.getElementById("modal-github-link");
//     githubLinkElement.href = githubLink;

//     document.getElementById("project-modal").style.display = "block";

//     // Essayer d'activer l'autoplay en utilisant postMessage
//     modalVideo.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
// }

function openModal(driveFileID, description, tools, githubLink) {
    var modalVideo = document.getElementById("drive-iframe");

    // Utiliser le lien de prévisualisation
    var embeddedURL = `https://drive.google.com/file/d/${driveFileID}/preview`;

    // Utiliser l'iframe avec le lien modifié
    modalVideo.src = embeddedURL;

    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-tools").innerHTML = tools.split(',').map(tool => `<li>${tool.trim()}</li>`).join('');

    // Ajouter le lien GitHub
    var githubLinkElement = document.getElementById("modal-github-link");
    githubLinkElement.href = githubLink;

    document.getElementById("project-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("project-modal").style.display = "none";
    
    // Arrêter la vidéo lorsque le modal est fermé
    var driveIframe = document.getElementById("drive-iframe");
    driveIframe.src = "";
}

// function closeModal() {
//     document.getElementById("project-modal").style.display = "none";
// }




// function closeModal() {
//     var modalVideo = document.getElementById("modal-video");
//     modalVideo.pause();  // Pause la vidéo lors de la fermeture du modal
//     document.getElementById("project-modal").style.display = "none";
// }
