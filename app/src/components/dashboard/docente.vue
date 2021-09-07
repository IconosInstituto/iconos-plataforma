<template lang="pug">
.row
    .col-6: q-card.shadow-24.q-mx-lg
        q-card-section.text-center
            .text-h6.text-dark Director
        q-card-section
            q-item(v-for="(i, index) in 5" clickable)
                q-item-section
                    q-item-label Estudiante {{i}}
                    q-item-label(caption) --------
    .col-6: q-card.shadow-24.q-mx-lg
        q-card-section.text-center
            .text-h6.text-dark Lector
        q-card-section
            q-item(v-for="(i, index) in 7" clickable)
                q-item-section
                    q-item-label Estudiante {{i}}
                    q-item-label(caption) --------
</template>