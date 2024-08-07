using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace userloginservice.Models
{
    public partial class boxofficebuddy_dbContext : DbContext
    {
        public boxofficebuddy_dbContext()
        {
        }

        public boxofficebuddy_dbContext(DbContextOptions<boxofficebuddy_dbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<City> Cities { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<State> States { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=1317;database=boxofficebuddy_db", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.2.0-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("city");

                entity.HasIndex(e => e.StateId, "FK_state_id");

                entity.Property(e => e.CityId)
                    .ValueGeneratedNever()
                    .HasColumnName("city_id");

                entity.Property(e => e.CityName)
                    .HasMaxLength(45)
                    .HasColumnName("city_name");

                entity.Property(e => e.StateId).HasColumnName("state_id");

                entity.HasOne(d => d.State)
                    .WithMany(p => p.Cities)
                    .HasForeignKey(d => d.StateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_state_id");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.Property(e => e.RoleId)
                    .ValueGeneratedNever()
                    .HasColumnName("role_id");

                entity.Property(e => e.RoleName)
                    .HasMaxLength(45)
                    .HasColumnName("role_name");
            });

            modelBuilder.Entity<State>(entity =>
            {
                entity.ToTable("state");

                entity.Property(e => e.StateId)
                    .ValueGeneratedNever()
                    .HasColumnName("state_id");

                entity.Property(e => e.StateName)
                    .HasMaxLength(45)
                    .HasColumnName("state_name");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.HasIndex(e => e.CityId, "FK_city_id");

                entity.HasIndex(e => e.RoleId, "FK_role_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.AddressLine1)
                    .HasMaxLength(45)
                    .HasColumnName("address_line1");

                entity.Property(e => e.AddressLine2)
                    .HasMaxLength(45)
                    .HasColumnName("address_line2");

                entity.Property(e => e.CityId).HasColumnName("city_id");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(45)
                    .HasColumnName("email_id");

                entity.Property(e => e.FullName)
                    .HasMaxLength(45)
                    .HasColumnName("full_name");

                entity.Property(e => e.MobileNo)
                    .HasMaxLength(45)
                    .HasColumnName("mobile_no");

                entity.Property(e => e.Password)
                    .HasMaxLength(45)
                    .HasColumnName("password");

                entity.Property(e => e.Pincode)
                    .HasMaxLength(45)
                    .HasColumnName("pincode");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.UserName)
                    .HasMaxLength(45)
                    .HasColumnName("user_name");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_city_id");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_role_id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
