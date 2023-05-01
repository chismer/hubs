export class SpawnDefaultSystem {
    constructor(scene) {
      this.scene = scene;
  
      this.scene.addEventListener("spawn-default-glb", this.onSpawnDefaultGLB);
    }
  
    onSpawnDefaultGLB = () => {
        
        const glbUrls = [
          'https://eviumspace-8-assets-e0f14fe0.s3.amazonaws.com/hubs/assets/models/gunterfiles/emoji_0.glb',
          'https://api.readyplayer.me/v1/avatars/63cfdfbdfa5b23b11a684d2e.glb',
          // Add more GLB URLs here
        ];
        
        glbUrls.forEach((url) => {
          const modelEl = document.createElement('a-entity');
          const nid = NAF.utils.createNetworkId();
        
          modelEl.setAttribute('gltf-model-plus', `src: ${url}`);
          modelEl.setAttribute('networked', `template: #interactable-media; networkId: ${nid}`);
          modelEl.setAttribute('interactable', '');
        
          modelEl.setAttribute("media-loader", {
            src: url,
            contentType: 'model/gltf-binary', 
            resolve: true,
            fileIsOwned: true,
            animate: false,
            moveTheParentNotTheMesh: true
          });
        
          modelEl.object3D.matrixNeedsUpdate = true;
        
          modelEl.addEventListener("model-loaded", () => {
            modelEl.emit("spawned-entity-created", { target: modelEl });
          });
        
          modelEl.addEventListener("model-error", (event) => {
            console.error("Error loading the model:", event.detail.error);
          });
        
          this.scene.appendChild(modelEl);
        });
    }
  }