import React, { createContext, useState } from 'react';

export const loadingProvider = createContext()
const LoadingContext = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const value = {isLoading, setIsLoading}
    return (
        <loadingProvider.Provider value={value}>
            {children}
        </loadingProvider.Provider>
    );
};

export default LoadingContext;