<template>
    <div>
        <nav-bar-component/>  

        <el-container>
          
                <el-aside :width="this.$store.state.menu.width">
                    <nav-menu-component/>
                </el-aside>
                
                <el-container>
                    <el-main>
                     <web-cam ref="webcam"
                        :device-id="deviceId"
                        width="100%"
                        @started="onStarted"
                        @stopped="onStopped"
                        @error="onError"
                        @cameras="onCameras"
                        @camera-change="onCameraChange"/>
                        <!--
                      <ContainerComponent/>-->
                    </el-main>
                </el-container>

        </el-container>

    </div>
</template>

<script>
import { WebCam } from "vue-web-cam";
import NavBarComponent from './NavBarComponent.vue'
//import ContainerComponent from './ContainerComponent.vue'
import NavMenuComponent from './NavMenuComponent.vue'
export default {
    name: 'IndexComponent',
    components: {
    NavBarComponent,
    //ContainerComponent,
    NavMenuComponent,
    WebCam
  },
 data() {
      return {
          img: null,
            camera: null,
            deviceId: null,
            devices: []
      }
    },
   watch: {
        camera: function(id) {
            this.deviceId = id;
        },
        devices: function() {
            // Once we have a list select the first one
            const [first] = this.devices;
            if (first) {
                this.camera = first.deviceId;
                this.deviceId = first.deviceId;
            }
        }
    },
    methods: {
        onCapture() {
            this.img = this.$refs.webcam.capture();
        },
        onStarted(stream) {
            console.log("On Started Event", stream);
        },
        onStopped(stream) {
            console.log("On Stopped Event", stream);
        },
        onStop() {
            this.$refs.webcam.stop();
        },
        onStart() {
            this.$refs.webcam.start();
        },
        onError(error) {
            console.log("On Error Event", error);
        },
        onCameras(cameras) {
            this.devices = cameras;
            console.log("On Cameras Event", cameras);
        },
        onCameraChange(deviceId) {
            this.deviceId = deviceId;
            this.camera = deviceId;
            console.log("On Camera Change Event", deviceId);
        }
    }
}
</script>