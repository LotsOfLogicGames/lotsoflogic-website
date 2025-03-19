let unityInstance = null;

        document.getElementById("play-button").addEventListener("click", function() {
            document.getElementById("unity-container").style.display = "block";
            
            document.getElementsByTagName("body")[0].style.overflowY = "hidden";

            createUnityInstance(document.querySelector("#unity-canvas"), {
                dataUrl: "Build/InfectedDawnWebTest.data.unityweb",
                frameworkUrl: "Build/InfectedDawnWebTest.framework.js.unityweb",
                codeUrl: "Build/InfectedDawnWebTest.wasm.unityweb",
                streamingAssetsUrl: "StreamingAssets",
                companyName: "LotsOfLogicGames",
                productName: "Infected Dawn",
                productVersion: "1.0.0"
            }, (progress) => {
                console.log(`[Unity] Loading progress: ${Math.round(progress * 100)}%`);
            }).then((instance) => {
                unityInstance = instance;
                console.log("[Unity] Instance created");
            });
        });

        document.getElementById("close-button").addEventListener("click", function() {

            document.getElementsByTagName("body")[0].style.overflowY = "scroll";

            if (unityInstance) {
                unityInstance.Quit().then(() => {
                    console.log("[Unity] Instance destroyed");
                    unityInstance = null;
                    document.getElementById("unity-container").style.display = "none";
                });
            } else {
                document.getElementById("unity-container").style.display = "none";
            }
        });