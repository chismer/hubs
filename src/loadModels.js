function loadGLBModels() {
    const sceneEl = document.querySelector('a-scene');
    const glbUrls = [
      'path/to/your/emoji_0.glb', // Cambiar a la ruta relativa correcta
      'path/to/your/emoji_1.glb', // Cambiar a la ruta relativa correcta
      // Add more GLB URLs here
    ];
  
    glbUrls.forEach(async (url) => {
      const modelEl = document.createElement('a-entity');
      const nid = NAF.utils.createNetworkId();
  
      modelEl.setAttribute('gltf-model-plus', `src: ${url}`);
      modelEl.setAttribute('networked', `template: #interactable-media; networkId: ${nid}`);
      modelEl.setAttribute('interactable', '');
  
      modelEl.setAttribute("media-loader", {
        src: url,
        resolve: true,
        fileIsOwned: true,
        animate: false,
        moveTheParentNotTheMesh: true
      });
  
      modelEl.object3D.matrixNeedsUpdate = true;
  
      modelEl.addEventListener("model-loaded", () => {
        // Emit "spawned-entity-created" after ensuring "networked" is properly set up.
        modelEl.emit("spawned-entity-created", { target: modelEl });
      });
  
      modelEl.addEventListener("model-error", (event) => {
        console.error("Error loading the model:", event.detail.error);
      });
  
      sceneEl.appendChild(modelEl);
    });
  }
  