'use client'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { useEffect, useState } from 'react';

type Props = {
    onUpload: (fileInfo: any) => void;
};

function UploadCareButton({ onUpload }: Props) {
    const [pubkey, setPubkey] = useState<string>("");
    
    // Debug logging
    useEffect(() => {
        const key = process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY || "";
        console.log("Uploadcare public key:", key);
        setPubkey(key);
    }, []);

    if (!pubkey) {
        return <div className="p-4 border border-red-500 rounded">
            ⚠️ Uploadcare public key not found. Please check your environment variables.
        </div>
    }

    return (
        <div className="border border-gray-300 rounded p-4 min-h-[100px] flex items-center justify-center">
            <FileUploaderRegular
                sourceList="local, camera, facebook, gdrive"
                cameraModes="photo, video"
                pubkey={pubkey}
                onChange={(fileInfo) => {
                    console.log("File uploaded:", fileInfo);
                    onUpload(fileInfo);
                }}
            />
        </div>
    );
}

export default UploadCareButton;