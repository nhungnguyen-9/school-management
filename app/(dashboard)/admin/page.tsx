import { UserCard } from "@/components/user-card";

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-flow">
            {/* left */}
            <div className="w-full lg:w-2/3">
                l
            </div>
            {/* usercard */}
            <div className="flex gap-4 justify-between flex-wrap">
                <UserCard type="student" />
                <UserCard type="teacher" />
                <UserCard type="parent" />
                <UserCard type="staff" />
            </div>
            {/* right */}
            <div className="w-full lg:w-1/3">
                r
            </div>
        </div>
    );
}

export default AdminPage;