import { ReactNode } from "react"
import { useModalStore } from "./stores/useModalStore"
import React from "react"
import { Modal } from "./components/Modal"
import { useToastStore } from "./stores/useToastStore"
import { Toast } from "./components/Toast"






type WrapperProps = {
    children: ReactNode
}



export function Wrapper({children}: WrapperProps){
    const {modal} = useModalStore()
    const {toast} = useToastStore()
    return (
        <>
             {toast?.id && <Toast
                type={toast?.type!}
                title={toast?.title!}
                description={toast?.description}
                id={toast?.id!}
            />}
            {children}
            {modal?.id && <Modal
                action={modal?.action!}
                title={modal?.title!}
                description={modal?.description!}
                id={modal?.id!}
            />}
        </>
    )
}