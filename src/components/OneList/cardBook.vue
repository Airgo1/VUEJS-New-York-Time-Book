<template>
    <div>
        <b-card>
            <b-media>
                <template #aside>
                    <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
                </template>

                <h5 class="mt-0">Media Title</h5>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                    ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </p>
                <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>

            </b-media>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'cardBook',
    props: {
        Book: Object
    },
	data () {
		return {
			ListData: this.listProps
		}
	},
    methods: {
        loadSelectedBooks(list) {
            console.log(list)
        }
    }
};
</script>