const config = {
    screens: {
        AuthStack: {
            screens: {
                ContinueWith: 'continuewith'
            }
        },
        HomeStack:{
            screens: {
                Home: 'home'
            }
        }
    }
};
const linking = {
    prefixes: ['2show://2show/'],
    config,
};
export default linking;

