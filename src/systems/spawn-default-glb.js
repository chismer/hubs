export class SpawnDefaultSystem {
    constructor(scene) {
      this.scene = scene;
  
      this.scene.addEventListener("spawn-default-glb", this.onSpawnDefaultGLB);
    }
  
    onSpawnDefaultGLB = () => {
        
      const glbUrls1 = [
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/8029f7eb-1579-4d98-b3ae-71088d732c55.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/b53a9a58-4bd7-4e05-977a-0a6c936d97ae.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/398ccef5-9083-4d1d-b3a3-8c4681c3f3b2.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/9d6aabc8-3a22-4e81-975d-043affa3f762.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/c50e64b5-c1dd-4abd-b7ab-b6024e23abf7.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/f391b6db-0b2d-414d-b82f-9ce4849b168f.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/49bd8a17-9606-48b0-a719-b3afadee41f5.glb',
      ];
      
      const glbUrls2 = [

        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/7be07d44-3d6d-4fcd-a216-11b082235132.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/86645ee2-26a1-4a97-beef-7575558dd5fd.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/d8e5d007-b4e8-4887-836a-ed1c462b0d33.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/edb7f19b-a1d1-496e-8a2c-b6e576e2d3a5.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/915fab5e-1271-4033-8248-fe5026381e29.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/f1189890-c358-4c93-9e15-2997b6803645.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/5be0be56-654c-4475-a5f6-76aaeaa66bed.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/32c271bf-6b51-4454-b97d-e5ea8e386c13.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/79239e15-5334-4da1-b109-fb3b6b73d3c5.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/bc03c970-e316-4c76-a7ea-6c847c07ce81.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/888c3b38-3c45-4ad3-a56c-dd5a3e6cf70e.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/c64cc121-17c0-45de-be1e-8b521367d90a.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/4488377b-80d5-4491-bee4-dd105b11ed2e.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/19e53746-d2fa-4336-b547-9c819119bf90.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/152d2eff-c85f-4958-a924-873e5e0c9618.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/ea7b7410-480e-45a6-af1e-8952aaa56070.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/42f4ff12-c839-4813-9d03-32887a424340.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/589aae0d-2e23-4dbd-80d8-bfa9f59c81fe.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/3a2f73c2-920a-4444-ad48-80d1439dc412.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/93a350d0-7a3e-426c-bd48-d4a0dfe1a980.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/b3c46b1c-d374-4368-b37f-0ada4e4d8ff9.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/5375cfeb-5457-4198-bbe2-6d5e0902a6f2.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/768e6302-03fc-4a0a-bf02-2f392e1f6e36.glb',
        'https://hubs-eviumspace-com-proxy.eviumspace.workers.dev/files/f7da2fec-0690-48c5-b001-ac1f73573fea.glb',
      ];

      addDefaultGLBInLocation(glbUrls1, { x: 0, y: 1, z: 0 }, { x: -90, y: 0, z: 0 }, this.scene);
      addDefaultGLBInLocation(glbUrls2, { x: 0.638, y: 1.717, z: 0 }, { x: 0, y: 90, z: 0 }, this.scene);

      function addDefaultGLBInLocation(glbUrls,position,rotation,scene) {
        
        glbUrls.forEach((url) => {
          const modelEl = document.createElement('a-entity');
          const nid = NAF.utils.createNetworkId();

          modelEl.setAttribute('gltf-model-plus', `src: ${url}`);
          modelEl.setAttribute('networked', `template: #interactable-media; networkId: ${nid}`);
          
          modelEl.setAttribute('interactable', '');
          modelEl.setAttribute('spawn-glb', '');

          modelEl.setAttribute("media-loader", {
            src: url,
            contentType: 'model/gltf-binary',
            resolve: true,
            fileIsOwned: true,
            animate: false,
            moveTheParentNotTheMesh: true
          });

          modelEl.setAttribute('position', position);
          modelEl.setAttribute('rotation', rotation);

          modelEl.object3D.matrixNeedsUpdate = true;
           

          modelEl.addEventListener("model-loaded", () => {
            modelEl.emit("spawned-entity-created", { target: modelEl });
          });

          modelEl.addEventListener("model-error", (event) => {
            console.error("Error loading the model:", event.detail.error);
          });

          scene.appendChild(modelEl);
        });
      }
    }
  }