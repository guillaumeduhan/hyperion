'use client';
import Header from '@/components/Header';
import clientSupabase from '@/lib/supabase/client';
import { createContext, useContext, useEffect, useState } from 'react';


const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: {
  children: React.ReactNode
}) {
  let [user, setUser] = useState<any>(undefined);
  let [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);

        const { data, error } = await clientSupabase.auth.getUser();

        if (data) setUser(data.user)
      } catch (error) {
        // Handle error here
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <AppContext.Provider value={{
      user,
      setUser
    }}>
      <main className="container grid gap-8">
        <Header />
        {children}
      </main>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}