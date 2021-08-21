<template>
    <div style="position:relative;width:100%;overflow:hidden">
        <div class="side-bar">
            <img src="~/assets/image/logo.jpg" alt="">
            <div>
                <div class="toggle-theme" @click="toggleTheme = !toggleTheme">
                    <img src="~/assets/image/sun.jpg" alt="">
                </div>
                <hr>
                <div class="user-profile">
                    <img src="~/assets/image/people.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="top-bar">
            <img src="~/assets/image/logo.jpg" alt="">
            <div class="top-bar-right">
                <div class="toggle-theme" @click="toggleTheme = !toggleTheme">
                    <img src="~/assets/image/sun.jpg" alt="">
                </div>
                <hr>
                <div class="user-profile">
                    <img src="~/assets/image/people.jpg" alt="">
                </div>
            </div>
        </div>
        <Nuxt />
    </div>
</template>

<script>
export default {
    data() {
       return { 
           toggleTheme: false
        }
    },
    watch: {
        toggleTheme(val) {
            if(val) {
                $nuxt.$colorMode.preference = 'light'
            }else {
                $nuxt.$colorMode.preference = 'dark'
            }
        }
    }
}
</script>