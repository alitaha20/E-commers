import React from 'react'
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export default function loading() {
  return (<>
  
   <div className="flex flex-col items-center gap-4 h-screen justify-center text-green-500 bg-green-200 ">
      <Button  disabled size="lg">
        <Spinner data-icon="inline-start" />
        Processing
      </Button>
    </div>
  


  </> 
   )
}
