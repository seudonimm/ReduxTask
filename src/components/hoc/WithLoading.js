import react, { useEffect, useState } from 'react';

const withLoading = (WrappedComponent) => {
    const withLoadingComponent = props => {
        const [loading, setLoading] = useState(false);
        const startLoading = (isFinished) => {
            setLoading(false);
            setTimeout(() => {
                setLoading(true);
            }, 1000);
        }
        useEffect(() => {
            startLoading();
        },[]);
        return(
            <WrappedComponent
                loading = {loading}
                setLoading={setLoading}
                startLoading={startLoading}
                {...props}
            />
        );
    };
    return withLoadingComponent;

};
export default withLoading;