<template>
    <a-col :sm="12" :md="8" :lg="6">
        <a-card hoverable>
            <template #cover>
                <a-carousel :after-change="onChange">
                    <div class="h-full">
                        <img class="w-full h-full object-cover "
                            src='https://s3-alpha-sig.figma.com/img/8cc5/8864/3cf3adbdf7f516132b40bf144cc082bb?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JWPjjkESDtCldUyxhBpY2-9pgTABkB6BVbqaKJfLphINGqZTAAVkmoEESxmYJ1QMUUnVcJar2iHh4PyuLWpfoqBvWIg6-KPOBUFIFBEg3jUwQRZpn3dm0J4pqvmJyfDdmlpBbhzhMlCDiNukGXjk0cyMNnX0G7l3LoyaZMaElQ54Z2X~Sm0ydbD~GYmOXPpAqielAfHHJq3WHWKlOwaILH5TY4VW1t472C7jXuddES7miPCsRdyZttz4P8TcAiPanR6uLbUMrzVPtHo4LkDdDEDeHqCF28CA~EEg~e0~hoy3ewoeJyMB~X8C~~zdI4McKBdcBU~B2CkJp-ntcpGUXQ__'>
                    </div>
                    <div class="h-full">
                        <img class="w-full h-full object-cover "
                            src='https://s3-alpha-sig.figma.com/img/8cc5/8864/3cf3adbdf7f516132b40bf144cc082bb?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JWPjjkESDtCldUyxhBpY2-9pgTABkB6BVbqaKJfLphINGqZTAAVkmoEESxmYJ1QMUUnVcJar2iHh4PyuLWpfoqBvWIg6-KPOBUFIFBEg3jUwQRZpn3dm0J4pqvmJyfDdmlpBbhzhMlCDiNukGXjk0cyMNnX0G7l3LoyaZMaElQ54Z2X~Sm0ydbD~GYmOXPpAqielAfHHJq3WHWKlOwaILH5TY4VW1t472C7jXuddES7miPCsRdyZttz4P8TcAiPanR6uLbUMrzVPtHo4LkDdDEDeHqCF28CA~EEg~e0~hoy3ewoeJyMB~X8C~~zdI4McKBdcBU~B2CkJp-ntcpGUXQ__'>
                    </div>
                    <div class="h-full">
                        <img class="w-full h-full object-cover "
                            src='https://s3-alpha-sig.figma.com/img/8cc5/8864/3cf3adbdf7f516132b40bf144cc082bb?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JWPjjkESDtCldUyxhBpY2-9pgTABkB6BVbqaKJfLphINGqZTAAVkmoEESxmYJ1QMUUnVcJar2iHh4PyuLWpfoqBvWIg6-KPOBUFIFBEg3jUwQRZpn3dm0J4pqvmJyfDdmlpBbhzhMlCDiNukGXjk0cyMNnX0G7l3LoyaZMaElQ54Z2X~Sm0ydbD~GYmOXPpAqielAfHHJq3WHWKlOwaILH5TY4VW1t472C7jXuddES7miPCsRdyZttz4P8TcAiPanR6uLbUMrzVPtHo4LkDdDEDeHqCF28CA~EEg~e0~hoy3ewoeJyMB~X8C~~zdI4McKBdcBU~B2CkJp-ntcpGUXQ__'>
                    </div>
                </a-carousel>
            </template>

            <a-card-meta title="Ozor berma">
                <template #description>Muallif: Henri Marsh</template>
            </a-card-meta>
        </a-card>
    </a-col>




</template>

<script setup>

</script>

<style scoped>
/* For demo */
/* carousel*/
:deep(.slick-slide) {
    border-radius: 15px;
    text-align: center;
    height: 200px;
    overflow: hidden;
}

:deep(.slick-slide>div) {
    height: 100%;
}

:deep(.slick-slide>div .slide-div) {
    height: 100%;

    display: flex !important;
    align-items: center;
}

:deep(.slick-slide h3) {
    color: #fff;
}

:deep(.slick-slider .slick-dots li button) {
    background: #535c67;
    border-radius: 50%;
    height: 12px;
    width: 12px;
}
:deep(.ant-carousel .slick-slide img ){
    width: 100%;
    height: 100%;
    object-fit: cover;
}
:deep(.slick-slider .slick-list) {
    border-radius: 15px;
}

:deep(.ant-carousel .slick-dots li.slick-active) {
    width: auto;
}

:deep(.slick-slider .slick-dots li.slick-active button) {
    background: #DE9551;
    width: 12px !important;
}

:deep(.slick-slider .slick-dots) {
    bottom: 20px;
}

/* card */
:deep(.ant-card-body) {
    padding: 0
}

:deep(.ant-card) {
    padding: 20px;
}

:deep(.ant-card-body) {
    margin-top: 20px;
}
</style>