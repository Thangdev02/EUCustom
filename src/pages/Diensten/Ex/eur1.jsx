import DynamicContentPage from "@/components/DynamicContentPage";
import { dienstenPages } from "@/data/dienstenData";

export default function EUR1Page() {
    const page = dienstenPages.eur1;

    return (
        <DynamicContentPage
            pageData={page}
            imageSrc="/eur1-doc.jpg"
            imageAlt="EUR.1 Certificaat"
        />
    );
}